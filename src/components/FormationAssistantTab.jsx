import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { GAME_FORMATS, OBJECTIVES, pickFormation, assignRosterToFormation } from '../lib/gameData'

export default function FormationAssistantTab({ team }) {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)
  const [format, setFormat] = useState(team.game_format || '11v11')
  const [objective, setObjective] = useState('balanced')

  useEffect(() => {
    loadRoster()
  }, [team.id])

  async function loadRoster() {
    setLoading(true)
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('team_id', team.id)
    if (!error) setRoster(data)
    setLoading(false)
  }

  const formation = pickFormation(format, objective)
  const slots = formation ? assignRosterToFormation(formation, roster) : []
  const usedIds = new Set(slots.filter((s) => s.player).map((s) => s.player.id))
  const bench = roster.filter((p) => !usedIds.has(p.id))

  const chip = (on) => ({
    display: 'inline-block', border: '1px solid #ccc', borderRadius: 4,
    padding: '8px 16px', marginRight: 8, marginBottom: 8, cursor: 'pointer',
    background: on ? '#1F4D3A' : '#fff', color: on ? '#fff' : '#333'
  })

  return (
    <div style={{ maxWidth: 800 }}>
      <h2>Formation assistant</h2>

      <p style={{ fontWeight: 600, fontSize: 13 }}>Game format</p>
      {GAME_FORMATS.map((g) => (
        <span key={g.id} style={chip(format === g.id)} onClick={() => setFormat(g.id)}>{g.name}</span>
      ))}

      <p style={{ fontWeight: 600, fontSize: 13, marginTop: 16 }}>Objective</p>
      {OBJECTIVES.map((o) => (
        <div key={o.id} style={{ ...chip(objective === o.id), display: 'block' }} onClick={() => setObjective(o.id)}>
          <strong>{o.name}</strong>
          <div style={{ fontSize: 12.5, marginTop: 4 }}>{o.tagline}</div>
        </div>
      ))}

      {formation && (
        <div style={{ marginTop: 24 }}>
          <h3>{formation.name}</h3>
          <p style={{ color: '#555' }}>{formation.blurb}</p>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              position: 'relative', width: 300, height: 420, background: '#1F4D3A',
              borderRadius: 8, flexShrink: 0
            }}>
              {slots.map((s, i) => (
                <div
                  key={s.slotKey || i}
                  style={{
                    position: 'absolute',
                    left: `${s.x}%`,
                    top: `${100 - s.y}%`,
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: s.player ? '#F5F2EA' : 'rgba(245,242,234,0.25)',
                    border: '2px solid #D98E27',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 600, color: '#1F4D3A', margin: '0 auto'
                  }}>
                    {s.player ? s.player.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase() : s.label}
                  </div>
                  <div style={{ fontSize: 10, color: '#F5F2EA', marginTop: 2, maxWidth: 70, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.player ? s.player.name : 'Open'}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 200 }}>
              {loading ? (
                <p>Loading roster…</p>
              ) : roster.length === 0 ? (
                <p style={{ color: '#777', fontSize: 13.5 }}>No roster saved yet — add players in the Team roster tab and they'll slot in here automatically.</p>
              ) : (
                <div>
                  <p style={{ fontWeight: 600, fontSize: 13 }}>Bench / unassigned</p>
                  {bench.length === 0 ? (
                    <p style={{ fontSize: 13, color: '#777' }}>Every rostered player has a slot in this shape.</p>
                  ) : (
                    bench.map((p) => (
                      <span key={p.id} style={{ display: 'inline-block', border: '1px solid #ddd', borderRadius: 4, padding: '6px 10px', fontSize: 12.5, marginRight: 6, marginBottom: 6 }}>{p.name}</span>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
