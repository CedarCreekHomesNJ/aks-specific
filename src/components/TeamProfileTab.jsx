import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { AGES, GAME_FORMATS } from '../lib/gameData'

const COACH_ROLES = ['Head coach', 'Assistant coach', 'Team manager', 'Goalkeeper coach']

export default function TeamProfileTab({ team, onTeamUpdate }) {
  const [form, setForm] = useState({
    team_name: team.team_name || '',
    location: team.location || '',
    age_group: team.age_group || '',
    game_format: team.game_format || '9v9',
    head_coach: team.head_coach || '',
    notes: team.notes || ''
  })
  const [coaches, setCoaches] = useState([])
  const [newCoachName, setNewCoachName] = useState('')
  const [newCoachRole, setNewCoachRole] = useState('Assistant coach')
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCoaches()
  }, [team.id])

  async function loadCoaches() {
    const { data, error } = await supabase
      .from('coaches')
      .select('*')
      .eq('team_id', team.id)
      .order('created_at', { ascending: true })
    if (!error) setCoaches(data)
  }

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function save() {
    if (!form.team_name.trim()) {
      setError('Enter a team name before saving.')
      return
    }
    setError('')
    setSaving(true)
    const { data, error } = await supabase
      .from('teams')
      .update(form)
      .eq('id', team.id)
      .select()
      .single()
    setSaving(false)
    if (error) {
      setError('Could not save just now. Try again.')
      return
    }
    setSavedAt(new Date())
    onTeamUpdate(data)
  }

  async function addCoach() {
    if (!newCoachName.trim()) return
    const { error } = await supabase.from('coaches').insert({
      team_id: team.id,
      name: newCoachName.trim(),
      role: newCoachRole
    })
    if (!error) {
      setNewCoachName('')
      loadCoaches()
    }
  }

  async function removeCoach(id) {
    await supabase.from('coaches').delete().eq('id', id)
    loadCoaches()
  }

  const inputStyle = { display: 'block', width: '100%', padding: 10, marginTop: 4, marginBottom: 16, fontSize: 14 }
  const labelStyle = { fontSize: 13, fontWeight: 600, color: '#444' }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>Team profile</h2>

      <label style={labelStyle}>Team name</label>
      <input style={inputStyle} value={form.team_name} onChange={(e) => update('team_name', e.target.value)} />

      <label style={labelStyle}>Location</label>
      <input style={inputStyle} value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="City, state" />

      <label style={labelStyle}>Age group</label>
      <select style={inputStyle} value={form.age_group} onChange={(e) => update('age_group', e.target.value)}>
        <option value="">Select an age group</option>
        {AGES.map((a) => <option key={a} value={`U${a}`}>{`U${a}`}</option>)}
      </select>

      <label style={labelStyle}>Game format</label>
      <select style={inputStyle} value={form.game_format} onChange={(e) => update('game_format', e.target.value)}>
        {GAME_FORMATS.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>

      <label style={labelStyle}>Head coach</label>
      <input style={inputStyle} value={form.head_coach} onChange={(e) => update('head_coach', e.target.value)} />

      <label style={labelStyle}>Additional coaches</label>
      <div style={{ marginBottom: 12 }}>
        {coaches.length === 0 && <p style={{ color: '#777', fontSize: 13 }}>No additional coaches added yet.</p>}
        {coaches.map((c) => (
          <div key={c.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
            <span style={{ flex: 1 }}>{c.name} — {c.role}</span>
            <button onClick={() => removeCoach(c.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          value={newCoachName}
          onChange={(e) => setNewCoachName(e.target.value)}
          placeholder="Coach name"
        />
        <select value={newCoachRole} onChange={(e) => setNewCoachRole(e.target.value)}>
          {COACH_ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <button onClick={addCoach}>Add</button>
      </div>

      <label style={labelStyle}>Notes</label>
      <textarea style={{ ...inputStyle, minHeight: 70 }} value={form.notes} onChange={(e) => update('notes', e.target.value)} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={save} disabled={saving} style={{ padding: '10px 20px', fontSize: 15 }}>
          {saving ? 'Saving…' : 'Save team profile'}
        </button>
        {savedAt && <span style={{ fontSize: 13, color: 'green' }}>Saved {savedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>}
      </div>
    </div>
  )
}
