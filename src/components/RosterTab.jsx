import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { SKILL_CATEGORIES, ALL_SKILLS, MAX_STRENGTHS, MAX_NEEDS, POSITIONS, suggestPositionsForPlayer } from '../lib/gameData'

export default function RosterTab({ team }) {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [strengths, setStrengths] = useState([])
  const [needs, setNeeds] = useState([])
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadRoster()
  }, [team.id])

  async function loadRoster() {
    setLoading(true)
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('team_id', team.id)
      .order('created_at', { ascending: true })
    if (!error) setRoster(data)
    setLoading(false)
  }

  function toggleSkill(skill, list, setList, max) {
    setList((prev) => {
      const has = prev.includes(skill)
      if (has) return prev.filter((s) => s !== skill)
      if (prev.length >= max) return prev
      return [...prev, skill]
    })
  }

  function startEdit(player) {
    setEditingId(player.id)
    setName(player.name)
    setAge(player.age ? String(player.age) : '')
    setStrengths(player.strengths || [])
    setNeeds(player.needs || [])
    setError('')
  }

  function cancelEdit() {
    setEditingId(null)
    setName('')
    setAge('')
    setStrengths([])
    setNeeds([])
    setError('')
  }

  async function submitPlayer() {
    if (!name.trim()) { setError('Enter a player name first.'); return }
    if (!strengths.length) { setError('Pick at least one strength.'); return }
    setError('')
    setSaving(true)
    const suggested = suggestPositionsForPlayer({ strengths, needs })
    const payload = {
      name: name.trim(),
      age: age ? Number(age) : null,
      strengths,
      needs,
      suggested_positions: suggested
    }

    let dbError
    if (editingId) {
      const { error } = await supabase.from('players').update(payload).eq('id', editingId)
      dbError = error
    } else {
      const { error } = await supabase.from('players').insert({ team_id: team.id, ...payload })
      dbError = error
    }

    setSaving(false)
    if (dbError) {
      setError(editingId ? 'Could not save these changes right now. Try again.' : 'Could not add this player right now. Try again.')
      return
    }
    cancelEdit()
    loadRoster()
  }

  async function removePlayer(id) {
    if (editingId === id) cancelEdit()
    await supabase.from('players').delete().eq('id', id)
    loadRoster()
  }

  return (
    <div style={{ maxWidth: 680 }}>
      <div className="card" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20 }}>{editingId ? 'Edit player' : 'Add a player'}</h2>

        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 2 }}>
            <label className="field-label">Name</label>
            <input className="field" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="field-label">Age</label>
            <input type="number" className="field" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>

        <label className="field-label">Strengths (up to {MAX_STRENGTHS})</label>
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.id} style={{ marginTop: 8, marginBottom: 4 }}>
            <p style={{ fontSize: 11.5, color: 'var(--ink-soft)', margin: '4px 0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{cat.name}</p>
            {cat.skills.map((skill) => {
              const on = strengths.includes(skill)
              return (
                <span key={skill} className={`chip ${on ? 'chip-active' : ''}`} onClick={() => toggleSkill(skill, strengths, setStrengths, MAX_STRENGTHS)}>
                  {skill}
                </span>
              )
            })}
          </div>
        ))}

        <label className="field-label" style={{ display: 'block', marginTop: 16 }}>Needs improvement (up to {MAX_NEEDS})</label>
        <div style={{ marginTop: 8 }}>
          {ALL_SKILLS.map((skill) => {
            const on = needs.includes(skill)
            return (
              <span key={skill} className={`chip chip-orange ${on ? 'chip-active' : ''}`} onClick={() => toggleSkill(skill, needs, setNeeds, MAX_NEEDS)}>
                {skill}
              </span>
            )
          })}
        </div>

        {error && <p style={{ color: '#D92D20' }}>{error}</p>}

        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button onClick={submitPlayer} disabled={saving} className="btn btn-primary">
            {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add to roster'}
          </button>
          {editingId && (
            <button onClick={cancelEdit} className="btn btn-outline">Cancel</button>
          )}
        </div>
      </div>

      {loading ? (
        <p style={{ color: 'var(--ink-soft)' }}>Loading roster…</p>
      ) : roster.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No players saved yet.</p>
      ) : (
        <div>
          {roster.map((p) => (
            <div key={p.id} className="card" style={{ padding: 14, marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderLeft: editingId === p.id ? '4px solid var(--orange)' : undefined }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: 15.5 }}>{p.name}</strong>
                  {p.age ? <span style={{ color: 'var(--ink-soft)', fontSize: 12.5 }}>U{p.age}</span> : null}
                  {(p.suggested_positions || []).map((posId) => {
                    const pos = POSITIONS.find((x) => x.id === posId)
                    return <span key={posId} className="badge">{pos ? pos.short : posId}</span>
                  })}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 6 }}>{p.strengths.join(', ')}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <button onClick={() => startEdit(p)} className="btn btn-outline btn-sm">Edit</button>
                <button onClick={() => removePlayer(p.id)} className="btn btn-danger btn-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
