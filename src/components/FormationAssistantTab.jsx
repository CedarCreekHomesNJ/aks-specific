import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'
import { GAME_FORMATS, OBJECTIVES, pickFormation, assignRosterToFormation } from '../lib/gameData'

const HALF_LENGTHS = [30, 35, 40, 45]

function fmtTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function initialsOf(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}

export default function FormationAssistantTab({ team }) {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)
  const [format, setFormat] = useState(team.game_format || '11v11')
  const [objective, setObjective] = useState('balanced')
  const [customPositions, setCustomPositions] = useState({})
  const pitchRef = useRef(null)
  const draggingRef = useRef(null)

  // Game Day state
  const [gameStarted, setGameStarted] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)
  const [halfLengthMinutes, setHalfLengthMinutes] = useState(30)
  const [clockRunning, setClockRunning] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [players, setPlayers] = useState([])
  const [pendingSubOff, setPendingSubOff] = useState(null)
  const [starterTargetPct, setStarterTargetPct] = useState(67)
  const [subTargetPct, setSubTargetPct] = useState(33)
  const tickRef = useRef(null)

  useEffect(() => {
    loadRoster()
  }, [team.id])

  useEffect(() => {
    setCustomPositions({})
  }, [format, objective])

  useEffect(() => {
    if (clockRunning) {
      tickRef.current = setInterval(() => {
        setElapsedSeconds((s) => s + 1)
        setPlayers((prev) => prev.map((p) => (p.onField ? { ...p, playedSeconds: p.playedSeconds + 1 } : p)))
      }, 1000)
    } else if (tickRef.current) {
      clearInterval(tickRef.current)
    }
    return () => { if (tickRef.current) clearInterval(tickRef.current) }
  }, [clockRunning])

  const halfSeconds = halfLengthMinutes * 60
  useEffect(() => {
    if (!gameStarted) return
    if (elapsedSeconds === halfSeconds || elapsedSeconds === halfSeconds * 2) {
      setClockRunning(false)
    }
  }, [elapsedSeconds, gameStarted, halfSeconds])

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
  const baseSlots = formation ? assignRosterToFormation(formation, roster) : []
  const slots = baseSlots.map((s) => {
    const custom = customPositions[s.slotKey]
    return custom ? { ...s, x: custom.x, y: custom.y } : s
  })
  const usedIds = new Set(slots.filter((s) => s.player).map((s) => s.player.id))
  const bench = roster.filter((p) => !usedIds.has(p.id))

  function clampPercent(n) {
    return Math.max(3, Math.min(97, n))
  }

  function handlePointerDown(e, slotKey) {
    e.preventDefault()
    draggingRef.current = slotKey
    try { e.target.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handlePointerMove(e) {
    if (!draggingRef.current || !pitchRef.current) return
    const rect = pitchRef.current.getBoundingClientRect()
    const x = clampPercent(((e.clientX - rect.left) / rect.width) * 100)
    const y = clampPercent(100 - ((e.clientY - rect.top) / rect.height) * 100)
    setCustomPositions((prev) => ({ ...prev, [draggingRef.current]: { x, y } }))
  }

  function handlePointerUp() {
    draggingRef.current = null
  }

  function resetPositions() {
    setCustomPositions({})
  }

  const hasCustomPositions = Object.keys(customPositions).length > 0

  // --- Game Day logic ---

  function startGameDay() {
    const starters = slots
      .filter((s) => s.player)
      .map((s) => ({ id: s.player.id, name: s.player.name, role: s.role, tier: 'starter', onField: true, playedSeconds: 0, x: s.x, y: s.y }))
    const subs = bench.map((p) => ({ id: p.id, name: p.name, role: null, tier: 'sub', onField: false, playedSeconds: 0, x: null, y: null }))
    setPlayers([...starters, ...subs])
    setElapsedSeconds(0)
    setClockRunning(false)
    setPendingSubOff(null)
    setGameStarted(true)
  }

  function endGameDay() {
    const confirmed = window.confirm('End this game and clear the playing-time tracker? This cannot be undone.')
    if (!confirmed) return
    setClockRunning(false)
    setGameStarted(false)
    setFullScreen(false)
    setPlayers([])
    setElapsedSeconds(0)
    setPendingSubOff(null)
  }

  function selectSubOff(id) {
    setPendingSubOff((prev) => (prev === id ? null : id))
  }

  function executeSub(offId, onId) {
    setPlayers((prev) => {
      const outgoing = prev.find((p) => p.id === offId)
      return prev.map((p) => {
        if (p.id === offId) return { ...p, onField: false, x: null, y: null }
        if (p.id === onId) return { ...p, onField: true, x: outgoing ? outgoing.x : 50, y: outgoing ? outgoing.y : 50, role: outgoing ? outgoing.role : null }
        return p
      })
    })
    setPendingSubOff(null)
  }

  function performSub(benchId) {
    if (!pendingSubOff) return
    executeSub(pendingSubOff, benchId)
  }

  function paceDelta(p) {
    const targetPct = p.tier === 'starter' ? starterTargetPct : subTargetPct
    const target = elapsedSeconds * (targetPct / 100)
    return p.playedSeconds - target
  }

  const onFieldPlayers = players.filter((p) => p.onField)
  const benchPlayers = players.filter((p) => !p.onField)

  const half = elapsedSeconds < halfSeconds ? 1 : elapsedSeconds < halfSeconds * 2 ? 2 : 'FT'
  const secondsIntoHalf = half === 1 ? elapsedSeconds : half === 2 ? elapsedSeconds - halfSeconds : halfSeconds
  const remainingInHalf = Math.max(0, halfSeconds - secondsIntoHalf)
  const atHalftime = half === 2 && elapsedSeconds === halfSeconds && !clockRunning

  let suggestion = null
  if (clockRunning && elapsedSeconds > 300 && onFieldPlayers.length && benchPlayers.length) {
    const worstOn = onFieldPlayers.slice().sort((a, b) => paceDelta(b) - paceDelta(a))[0]
    const worstOff = benchPlayers.slice().sort((a, b) => paceDelta(a) - paceDelta(b))[0]
    if (worstOn && worstOff && paceDelta(worstOn) > 120 && paceDelta(worstOff) < -120) {
      suggestion = { off: worstOn, on: worstOff }
    }
  }

  const clockLabel = half === 'FT' ? 'Full time' : `Half ${half} · ${fmtTime(remainingInHalf)} remaining`
  const clockButtonLabel = half === 'FT' ? null : atHalftime ? '▶ Start second half' : clockRunning ? '⏸ Pause clock' : '▶ Start clock'

  const suggestionBanner = suggestion && (
    <div style={{ background: 'var(--orange-light)', border: '1px solid var(--orange)', borderRadius: 10, padding: 12, marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
      <span style={{ fontSize: 13.5, color: 'var(--orange-dark)', fontWeight: 600 }}>
        💡 Suggested sub: bring on <strong>{suggestion.on.name}</strong> for <strong>{suggestion.off.name}</strong> ({Math.round(paceDelta(suggestion.off) / 60)} min over pace)
      </span>
      <button onClick={() => executeSub(suggestion.off.id, suggestion.on.id)} className="btn btn-primary btn-sm">Make this sub</button>
    </div>
  )

  function GameModePitch() {
    return (
      <div
        className="pitch-card"
        style={{
          width: 'min(94vw, calc((100vh - 190px) / 1.4))',
          aspectRatio: '1 / 1.4',
          flexShrink: 0,
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', inset: '2%', border: '2px solid rgba(255,255,255,0.25)', borderRadius: 10 }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '22%', aspectRatio: '1 / 1', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%' }} />
        {onFieldPlayers.filter((p) => p.x != null).map((p) => {
          const over = paceDelta(p) > 60
          const selected = pendingSubOff === p.id
          return (
            <div
              key={p.id}
              onClick={() => selectSubOff(p.id)}
              style={{ position: 'absolute', left: `${p.x}%`, top: `${100 - p.y}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{
                width: 'clamp(46px, 8.5vw, 84px)', height: 'clamp(46px, 8.5vw, 84px)', borderRadius: '50%',
                background: selected ? 'var(--orange)' : '#fff',
                border: `3px solid ${selected ? '#fff' : over ? 'var(--orange)' : 'var(--green-dark)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(9px, 1.7vw, 14px)',
                color: selected ? '#fff' : 'var(--green-dark)', margin: '0 auto',
                boxShadow: '0 3px 10px rgba(0,0,0,0.4)', padding: 4, lineHeight: 1.15, textAlign: 'center'
              }}>
                {p.name}
              </div>
              <div style={{ fontSize: 'clamp(10px, 1.6vw, 14px)', color: over ? 'var(--orange)' : '#fff', marginTop: 4, fontWeight: 700 }}>
                {fmtTime(p.playedSeconds)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  function BenchSidebar() {
    return (
      <div style={{ minWidth: 200 }}>
        <p className="section-title">Subs {pendingSubOff ? '— tap one to bring on' : ''}</p>
        {benchPlayers.length === 0 ? (
          <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>No subs on the bench.</p>
        ) : (
          benchPlayers.slice().sort((a, b) => paceDelta(a) - paceDelta(b)).map((p) => {
            const under = paceDelta(p) < -60
            return (
              <div
                key={p.id}
                onClick={() => performSub(p.id)}
                className="card"
                style={{ padding: 10, marginBottom: 8, cursor: pendingSubOff ? 'pointer' : 'default', opacity: pendingSubOff ? 1 : 0.85, borderLeft: under ? '4px solid var(--blue)' : '4px solid var(--line)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: 13.5 }}>{p.name}</strong>
                  <span className="stat-number" style={{ fontSize: 13 }}>{fmtTime(p.playedSeconds)}</span>
                </div>
                {under && <div style={{ fontSize: 11, color: 'var(--blue)' }}>{Math.round(Math.abs(paceDelta(p)) / 60)} min under pace</div>}
              </div>
            )
          })
        )}
      </div>
    )
  }

  if (fullScreen) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#0c2417', zIndex: 1000, overflowY: 'auto', padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <div>
            <span className="stat-number" style={{ color: '#fff', fontSize: 20 }}>{clockLabel}</span>
          </div>
          <div>
            {clockButtonLabel && (
              <button onClick={() => setClockRunning((r) => !r)} className="btn btn-secondary btn-sm" style={{ marginRight: 8 }}>{clockButtonLabel}</button>
            )}
            <button onClick={() => setFullScreen(false)} className="btn btn-outline btn-sm">✕ Exit Game Mode</button>
          </div>
        </div>

        {suggestionBanner}
        {pendingSubOff && (
          <p style={{ fontSize: 13, color: 'var(--orange)', fontWeight: 600, marginBottom: 10 }}>
            Subbing off {players.find((p) => p.id === pendingSubOff)?.name} — tap a sub to bring them on, or tap the same player again to cancel.
          </p>
        )}

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          <GameModePitch />
          <BenchSidebar />
        </div>
      </div>
    )
  }

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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
            <div>
              <h3 style={{ marginBottom: 2 }}>{formation.name}</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 12, maxWidth: 480 }}>{formation.blurb}</p>
            </div>
            {hasCustomPositions && (
              <button onClick={resetPositions} className="btn btn-outline btn-sm">Reset positions</button>
            )}
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: -4, marginBottom: 14 }}>
            Drag any player circle to adjust their spot on the field.
          </p>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div
              ref={pitchRef}
              className="pitch-card"
              style={{ width: 300, height: 420, flexShrink: 0, touchAction: 'none' }}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <div style={{ position: 'absolute', inset: 10, border: '2px solid rgba(255,255,255,0.25)', borderRadius: 10, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 70, height: 70, border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%', pointerEvents: 'none' }} />
              {slots.map((s, i) => (
                <div
                  key={s.slotKey || i}
                  onPointerDown={(e) => handlePointerDown(e, s.slotKey)}
                  style={{ position: 'absolute', left: `${s.x}%`, top: `${100 - s.y}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'grab', touchAction: 'none', userSelect: 'none' }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: s.player ? '#fff' : 'rgba(255,255,255,0.25)',
                    border: '2px solid var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: 'var(--green-dark)', margin: '0 auto',
                    fontFamily: "'Poppins', sans-serif",
                    boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
                  }}>
                    {s.player ? initialsOf(s.player.name) : s.label}
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

          {roster.length > 0 && (
            <div className="card" style={{ marginTop: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <h3 style={{ margin: 0 }}>Game Day — playing time tracker</h3>
                  <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', margin: '4px 0 0' }}>
                    Stays in this browser tab only — refreshing the page resets it, so keep this tab open during the match.
                  </p>
                </div>
                {!gameStarted ? (
                  <button onClick={startGameDay} className="btn btn-primary btn-sm">Start Game Day</button>
                ) : (
                  <div>
                    <button onClick={() => setFullScreen(true)} className="btn btn-secondary btn-sm" style={{ marginRight: 8 }}>Enter Game Mode</button>
                    <button onClick={endGameDay} className="btn btn-danger btn-sm">End game</button>
                  </div>
                )}
              </div>

              {!gameStarted && (
                <div style={{ marginTop: 14 }}>
                  <p className="section-title">Half length</p>
                  {HALF_LENGTHS.map((m) => (
                    <span key={m} className={`chip ${halfLengthMinutes === m ? 'chip-active' : ''}`} onClick={() => setHalfLengthMinutes(m)}>{m} min</span>
                  ))}
                </div>
              )}

              {gameStarted && (
                <div style={{ marginTop: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
                    <span className="stat-number" style={{ fontSize: 22 }}>{clockLabel}</span>
                    {clockButtonLabel && (
                      <button onClick={() => setClockRunning((r) => !r)} className="btn btn-secondary btn-sm">{clockButtonLabel}</button>
                    )}
                    <label style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>
                      Starters target
                      <input type="number" className="field" value={starterTargetPct} onChange={(e) => setStarterTargetPct(Number(e.target.value) || 0)} style={{ width: 56, padding: '4px 6px', marginLeft: 6, display: 'inline-block' }} />%
                    </label>
                    <label style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>
                      Subs target
                      <input type="number" className="field" value={subTargetPct} onChange={(e) => setSubTargetPct(Number(e.target.value) || 0)} style={{ width: 56, padding: '4px 6px', marginLeft: 6, display: 'inline-block' }} />%
                    </label>
                  </div>

                  {suggestionBanner}

                  {pendingSubOff && (
                    <p style={{ fontSize: 13, color: 'var(--orange-dark)', fontWeight: 600, marginBottom: 10 }}>
                      Subbing off {players.find((p) => p.id === pendingSubOff)?.name} — tap a bench player below to bring them on, or tap the same on-field player again to cancel.
                    </p>
                  )}

                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <p className="section-title">On field</p>
                      {onFieldPlayers.slice().sort((a, b) => paceDelta(b) - paceDelta(a)).map((p) => {
                        const delta = paceDelta(p)
                        const over = delta > 60
                        return (
                          <div key={p.id} onClick={() => selectSubOff(p.id)} className="card" style={{ padding: 10, marginBottom: 8, cursor: 'pointer', borderLeft: pendingSubOff === p.id ? '4px solid var(--orange)' : over ? '4px solid var(--orange)' : '4px solid var(--green)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <strong style={{ fontSize: 13.5 }}>{p.name}{p.role ? ` (${p.role})` : ''}</strong>
                              <span className="stat-number" style={{ fontSize: 14 }}>{fmtTime(p.playedSeconds)}</span>
                            </div>
                            <div style={{ fontSize: 11.5, color: over ? 'var(--orange-dark)' : 'var(--ink-soft)' }}>
                              {over ? `${Math.round(delta / 60)} min over target pace` : 'On target pace'}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div style={{ flex: 1, minWidth: 240 }}>
                      <BenchSidebar />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
