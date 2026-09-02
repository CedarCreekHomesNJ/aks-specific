import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const EVENT_TYPES = [
  { id: 'practice', label: 'Practice' },
  { id: 'game', label: 'Game' }
]

const ATTENDANCE_STATUSES = [
  { id: 'present', label: 'Present', color: 'var(--green)' },
  { id: 'late', label: 'Late', color: 'var(--orange)' },
  { id: 'absent', label: 'Absent', color: '#D92D20' }
]

function emptyForm() {
  return { type: 'practice', opponent: '', eventDate: '', eventTime: '', location: '', savedPlanId: '', notes: '' }
}

export default function ScheduleTab({ team }) {
  const [events, setEvents] = useState([])
  const [roster, setRoster] = useState([])
  const [savedPlans, setSavedPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(emptyForm())
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [attendanceOpenId, setAttendanceOpenId] = useState(null)
  const [attendance, setAttendance] = useState({})
  const [attendanceLoading, setAttendanceLoading] = useState(false)

  useEffect(() => {
    loadAll()
  }, [team.id])

  async function loadAll() {
    setLoading(true)
    const [eventsRes, rosterRes, plansRes] = await Promise.all([
      supabase.from('schedule_events').select('*').eq('team_id', team.id).order('event_date', { ascending: true }),
      supabase.from('players').select('*').eq('team_id', team.id),
      supabase.from('saved_plans').select('*').eq('team_id', team.id).order('created_at', { ascending: false })
    ])
    if (!eventsRes.error) setEvents(eventsRes.data)
    if (!rosterRes.error) setRoster(rosterRes.data)
    if (!plansRes.error) setSavedPlans(plansRes.data)
    setLoading(false)
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function startEdit(ev) {
    setEditingId(ev.id)
    setForm({
      type: ev.type,
      opponent: ev.opponent || '',
      eventDate: ev.event_date || '',
      eventTime: ev.event_time || '',
      location: ev.location || '',
      savedPlanId: ev.saved_plan_id || '',
      notes: ev.notes || ''
    })
    setError('')
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(emptyForm())
    setError('')
  }

  async function submitEvent() {
    if (!form.eventDate) { setError('Pick a date first.'); return }
    setError('')
    setSaving(true)
    const payload = {
      type: form.type,
      opponent: form.type === 'game' ? form.opponent.trim() || null : null,
      event_date: form.eventDate,
      event_time: form.eventTime || null,
      location: form.location.trim() || null,
      saved_plan_id: form.type === 'practice' && form.savedPlanId ? form.savedPlanId : null,
      notes: form.notes.trim() || null
    }
    let dbError
    if (editingId) {
      const { error } = await supabase.from('schedule_events').update(payload).eq('id', editingId)
      dbError = error
    } else {
      const { error } = await supabase.from('schedule_events').insert({ team_id: team.id, ...payload })
      dbError = error
    }
    setSaving(false)
    if (dbError) {
      setError('Could not save this event right now. Try again.')
      return
    }
    cancelEdit()
    loadAll()
  }

  async function deleteEvent(id) {
    const confirmed = window.confirm('Delete this event? Any attendance recorded for it will be deleted too.')
    if (!confirmed) return
    if (attendanceOpenId === id) setAttendanceOpenId(null)
    await supabase.from('schedule_events').delete().eq('id', id)
    loadAll()
  }

  async function openAttendance(eventId) {
    if (attendanceOpenId === eventId) {
      setAttendanceOpenId(null)
      return
    }
    setAttendanceOpenId(eventId)
    setAttendanceLoading(true)
    const { data, error } = await supabase.from('attendance').select('*').eq('event_id', eventId)
    const map = {}
    if (!error) data.forEach((r) => { map[r.player_id] = r.status })
    setAttendance(map)
    setAttendanceLoading(false)
  }

  async function setStatus(eventId, playerId, status) {
    setAttendance((prev) => ({ ...prev, [playerId]: status }))
    await supabase.from('attendance').upsert(
      { event_id: eventId, player_id: playerId, status },
      { onConflict: 'event_id,player_id' }
    )
  }

  const today = new Date().toISOString().slice(0, 10)
  const upcoming = events.filter((e) => e.event_date >= today)
  const past = events.filter((e) => e.event_date < today).reverse()

  function EventCard(ev) {
    const plan = savedPlans.find((p) => p.id === ev.saved_plan_id)
    const dateLabel = new Date(ev.event_date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
    return (
      <div key={ev.id} className="card" style={{ padding: 14, marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <span className={ev.type === 'game' ? 'badge badge-orange' : 'badge'}>{ev.type === 'game' ? 'Game' : 'Practice'}</span>
            <div style={{ fontWeight: 700, fontSize: 15, marginTop: 4 }}>
              {dateLabel}{ev.event_time ? ` · ${ev.event_time}` : ''}{ev.type === 'game' && ev.opponent ? ` vs ${ev.opponent}` : ''}
            </div>
            {ev.location && <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>{ev.location}</div>}
            {plan && <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Linked plan: {plan.name}</div>}
            {ev.notes && <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 4 }}>{ev.notes}</div>}
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button onClick={() => openAttendance(ev.id)} className="btn btn-secondary btn-sm">
              {attendanceOpenId === ev.id ? 'Hide attendance' : 'Attendance'}
            </button>
            <button onClick={() => startEdit(ev)} className="btn btn-outline btn-sm">Edit</button>
            <button onClick={() => deleteEvent(ev.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>

        {attendanceOpenId === ev.id && (
          <div style={{ marginTop: 14, borderTop: '1px solid var(--line)', paddingTop: 12 }}>
            {attendanceLoading ? (
              <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Loading attendance…</p>
            ) : roster.length === 0 ? (
              <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>No roster saved yet — add players in the Team roster tab.</p>
            ) : (
              roster.map((p) => (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
                  <span style={{ fontSize: 13.5 }}>{p.name}</span>
                  <div>
                    {ATTENDANCE_STATUSES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStatus(ev.id, p.id, s.id)}
                        className="btn btn-sm"
                        style={{
                          marginLeft: 6,
                          background: attendance[p.id] === s.id ? s.color : '#fff',
                          color: attendance[p.id] === s.id ? '#fff' : 'var(--ink)',
                          border: `2px solid ${attendance[p.id] === s.id ? s.color : 'var(--line)'}`
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 700 }}>
      <div className="card" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20 }}>{editingId ? 'Edit event' : 'Add to schedule'}</h2>

        <p className="section-title">Type</p>
        {EVENT_TYPES.map((t) => (
          <span key={t.id} className={`chip ${form.type === t.id ? 'chip-active' : ''}`} onClick={() => update('type', t.id)}>{t.label}</span>
        ))}

        <div style={{ display: 'flex', gap: 12, marginTop: 16, marginBottom: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 140 }}>
            <label className="field-label">Date</label>
            <input type="date" className="field" value={form.eventDate} onChange={(e) => update('eventDate', e.target.value)} />
          </div>
          <div style={{ flex: 1, minWidth: 120 }}>
            <label className="field-label">Time (optional)</label>
            <input type="time" className="field" value={form.eventTime} onChange={(e) => update('eventTime', e.target.value)} />
          </div>
        </div>

        {form.type === 'game' && (
          <div style={{ marginBottom: 16 }}>
            <label className="field-label">Opponent</label>
            <input className="field" value={form.opponent} onChange={(e) => update('opponent', e.target.value)} placeholder="e.g. Lakewood FC" />
          </div>
        )}

        <div style={{ marginBottom: 16 }}>
          <label className="field-label">Location</label>
          <input className="field" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="Field name or address" />
        </div>

        {form.type === 'practice' && savedPlans.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <label className="field-label">Link a saved practice plan (optional)</label>
            <select className="field" value={form.savedPlanId} onChange={(e) => update('savedPlanId', e.target.value)}>
              <option value="">No plan linked</option>
              {savedPlans.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        )}

        <div style={{ marginBottom: 16 }}>
          <label className="field-label">Notes</label>
          <textarea className="field" value={form.notes} onChange={(e) => update('notes', e.target.value)} />
        </div>

        {error && <p style={{ color: '#D92D20' }}>{error}</p>}

        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={submitEvent} disabled={saving} className="btn btn-primary">
            {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add to schedule'}
          </button>
          {editingId && <button onClick={cancelEdit} className="btn btn-outline">Cancel</button>}
        </div>
      </div>

      {loading ? (
        <p style={{ color: 'var(--ink-soft)' }}>Loading schedule…</p>
      ) : (
        <div>
          <p className="section-title">Upcoming</p>
          {upcoming.length === 0 ? (
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 24 }}>Nothing scheduled yet.</p>
          ) : (
            <div style={{ marginBottom: 24 }}>{upcoming.map(EventCard)}</div>
          )}

          <p className="section-title">Past</p>
          {past.length === 0 ? (
            <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>No past events yet.</p>
          ) : (
            <div>{past.map(EventCard)}</div>
          )}
        </div>
      )}
    </div>
  )
}
