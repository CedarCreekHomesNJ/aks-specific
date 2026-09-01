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

  return (
    <div style={{ maxWidth: 820 }}>
      <div className="card" style={{ marginBottom: 20 }}>
        <p className="section-title">Game format</p>
        {GAME_FORMATS.map((g) => (
          <span key={g.id} className={`chip ${format === g.id ? 'chip-active' : ''}`} onClick={() => setFormat(g.id)}>{g.name}</span>
        ))}

        <p className="section-title" style={{ marginTop: 16 }}>Objective</p>
        {OBJECTIVES.map((o) => (
          <div key={o.id} className={`chip chip-block chip-orange ${objective === o.id ? 'chip-active' : ''}`} onClick={() => setObjective(o.id)}>
            <strong>{o.name}</strong>
            <div className="chip-sub">{o.tagline}</div>
          </div>
        ))}
      </div>

      {formation && (
        <div>
          <h3 style={{ marginBottom: 2 }}>{formation.name}</h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 18 }}>{formation.blurb}</p>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="pitch-card" style={{ width: 300, height: 420, flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(255,255,255,0.25)', borderRadius: 10 }} />
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 70, height: 70, border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%' }} />
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
                    background: s.player ? '#fff' : 'rgba(255,255,255,0.25)',
                    border: '2px solid var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: 'var(--green-dark)', margin: '0 auto',
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    {s.player ? s.player.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase() : s.label}
                  </div>
                  <div style={{ fontSize: 10, color: '#fff', marginTop: 2, maxWidth: 70, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 600 }}>
                    {s.player ? s.player.name : 'Open'}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ flex: 1, minWidth: 220 }}>
              {loading ? (
                <p style={{ color: 'var(--ink-soft)' }}>Loading roster…</p>
              ) : roster.length === 0 ? (
                <p style={{ color: 'var(--ink-soft)', fontSize: 13.5 }}>No roster saved yet — add players in the Team roster tab and they'll slot in here automatically.</p>
              ) : (
                <div>
                  <p className="section-title">Bench / unassigned</p>
                  {bench.length === 0 ? (
                    <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Every rostered player has a slot in this shape.</p>
                  ) : (
                    bench.map((p) => (
                      <span key={p.id} className="chip">{p.name}</span>
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
