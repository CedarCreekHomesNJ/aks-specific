import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { SKILL_CATEGORIES, ALL_SKILLS, MAX_STRENGTHS, MAX_NEEDS, POSITIONS, suggestPositionsForPlayer } from '../lib/gameData'

export default function RosterTab({ team }) {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [strengths, setStrengths] = useState([])
  const [needs, setNeeds] = useState([])
  const [error, setError] = useState('')

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

  async function addPlayer() {
    if (!name.trim()) { setError('Enter a player name first.'); return }
    if (!strengths.length) { setError('Pick at least one strength.'); return }
    setError('')
    const suggested = suggestPositionsForPlayer({ strengths, needs })
    const { error } = await supabase.from('players').insert({
      team_id: team.id,
      name: name.trim(),
      age: age ? Number(age) : null,
      strengths,
      needs,
      suggested_positions: suggested
    })
    if (error) {
      setError('Could not add this player right now. Try again.')
      return
    }
    setName('')
    setAge('')
    setStrengths([])
    setNeeds([])
    loadRoster()
  }

  async function removePlayer(id) {
    await supabase.from('players').delete().eq('id', id)
    loadRoster()
  }

  const chipStyle = (on) => ({
    border: '1px solid #ccc',
    borderRadius: 4,
    padding: '5px 10px',
    fontSize: 12.5,
    marginRight: 6,
    marginBottom: 6,
    cursor: 'pointer',
    background: on ? '#1F4D3A' : '#fff',
    color: on ? '#fff' : '#333',
    display: 'inline-block'
  })

  return (
    <div style={{ maxWidth: 640 }}>
      <h2>Team roster</h2>

      <div style={{ border: '1px solid #ddd', borderRadius: 6, padding: 20, marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 2 }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Name</label>
            <input style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Age</label>
            <input type="number" style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }} value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>

        <label style={{ fontSize: 13, fontWeight: 600 }}>Strengths (up to {MAX_STRENGTHS})</label>
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.id} style={{ marginTop: 8, marginBottom: 8 }}>
            <p style={{ fontSize: 12, color: '#777', margin: '4px 0' }}>{cat.name}</p>
            {cat.skills.map((skill) => {
              const on = strengths.includes(skill)
              return (
                <span key={skill} style={chipStyle(on)} onClick={() => toggleSkill(skill, strengths, setStrengths, MAX_STRENGTHS)}>
                  {skill}
                </span>
              )
            })}
          </div>
        ))}

        <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginTop: 16 }}>Needs improvement (up to {MAX_NEEDS})</label>
        <div style={{ marginTop: 8 }}>
          {ALL_SKILLS.map((skill) => {
            const on = needs.includes(skill)
            return (
              <span key={skill} style={{ ...chipStyle(on), background: on ? '#D98E27' : '#fff' }} onClick={() => toggleSkill(skill, needs, setNeeds, MAX_NEEDS)}>
                {skill}
              </span>
            )
          })}
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button onClick={addPlayer} style={{ marginTop: 16, padding: '10px 20px' }}>Add to roster</button>
      </div>

      {loading ? (
        <p>Loading roster…</p>
      ) : roster.length === 0 ? (
        <p style={{ color: '#777' }}>No players saved yet.</p>
      ) : (
        <div>
          {roster.map((p) => (
            <div key={p.id} style={{ border: '1px solid #eee', borderRadius: 6, padding: 12, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>{p.name}</strong>{p.age ? ` (U${p.age})` : ''}{' '}
                {(p.suggested_positions || []).map((posId) => {
                  const pos = POSITIONS.find((x) => x.id === posId)
                  return <span key={posId} style={{ background: '#1F4D3A', color: '#fff', borderRadius: 3, padding: '2px 8px', fontSize: 11, marginLeft: 6 }}>{pos ? pos.short : posId}</span>
                })}
                <div style={{ fontSize: 12.5, color: '#777', marginTop: 4 }}>{p.strengths.join(', ')}</div>
              </div>
              <button onClick={() => removePlayer(p.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
