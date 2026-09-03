import { useEffect, useRef, useState } from 'react'
import { DRILL_LAYOUTS } from '../lib/gameData'
import { getDrillPattern } from '../lib/drillPatterns'

function zigzagPath(x1, y1, x2, y2, segments = 5, amp = 2.4) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  let d = `M ${x1} ${y1}`
  for (let i = 1; i < segments; i++) {
    const t = i / segments
    const side = i % 2 === 0 ? 1 : -1
    d += ` L ${x1 + dx * t + nx * amp * side} ${y1 + dy * t + ny * amp * side}`
  }
  d += ` L ${x2} ${y2}`
  return d
}

function curvePath(x1, y1, x2, y2, curve = 7) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  return `M ${x1} ${y1} Q ${mx + nx * curve} ${my + ny * curve} ${x2} ${y2}`
}

const ROLE_STYLE = {
  attacker: { bg: 'linear-gradient(160deg, #fff 0%, #e4e9ee 100%)', border: 'var(--green-dark)', text: 'var(--green-dark)' },
  defender: { bg: 'linear-gradient(160deg, #ffe1da 0%, #ffc7ba 100%)', border: '#C23B22', text: '#8f2a17' },
  server: { bg: 'linear-gradient(160deg, #dceaff 0%, #b9d3ff 100%)', border: '#2563EB', text: '#1d4ed8' },
  keeper: { bg: 'linear-gradient(160deg, #fff4cc 0%, #ffe28a 100%)', border: '#B8860B', text: '#7a5b06' }
}
const ROLE_LABEL = { attacker: 'Attacker', defender: 'Defender', server: 'Server', keeper: 'Keeper' }
const ARROW_STYLE_LABEL = { pass: 'Pass', run: 'Run', dribble: 'Dribble' }

export default function DrillDiagram({ drill, onClose }) {
  const layout = DRILL_LAYOUTS[drill.formation] || {}
  const pattern = getDrillPattern(drill)
  const stepsText = drill.steps && drill.steps.length ? drill.steps : ['Set up the drill as described.']
  const n = Math.min(stepsText.length, pattern.keyframes.length)

  const [stepIndex, setStepIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [extraPlayers, setExtraPlayers] = useState([])
  const [manualPositions, setManualPositions] = useState({})
  const pitchRef = useRef(null)
  const draggingRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    setStepIndex(0)
    setPlaying(false)
    setExtraPlayers([])
    setManualPositions({})
    if (intervalRef.current) clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drill.id])

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setStepIndex((i) => (i + 1) % n)
      }, 2400)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [playing, n])

  function nextStep() { setPlaying(false); setStepIndex((i) => (i + 1) % n) }
  function prevStep() { setPlaying(false); setStepIndex((i) => (i - 1 + n) % n) }

  function clampPercent(v) {
    return Math.max(4, Math.min(96, v))
  }

  function handlePointerDown(e, key) {
    e.preventDefault()
    draggingRef.current = key
    try { e.target.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handlePointerMove(e) {
    if (!draggingRef.current || !pitchRef.current) return
    const rect = pitchRef.current.getBoundingClientRect()
    const x = clampPercent(((e.clientX - rect.left) / rect.width) * 100)
    const y = clampPercent(((e.clientY - rect.top) / rect.height) * 100)
    setManualPositions((prev) => ({ ...prev, [draggingRef.current]: { x, y } }))
  }

  function handlePointerUp() {
    draggingRef.current = null
  }

  function addPlayer() {
    setExtraPlayers((prev) => [...prev, { key: `extra-${Date.now()}`, x: 50, y: 50 }])
  }

  function removePlayer() {
    setExtraPlayers((prev) => prev.slice(0, -1))
  }

  function resetLayout() {
    setManualPositions({})
    setStepIndex(0)
    setPlaying(false)
  }

  const currentFrame = pattern.keyframes[stepIndex]
  const usedArrowTypes = new Set()

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(16,24,40,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}
      onClick={onClose}
    >
      <div className="card" style={{ maxWidth: 580, width: '100%', maxHeight: '92vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <span className="badge">{drill.players} on roster</span>
            <h3 style={{ margin: '6px 0 2px' }}>{drill.name}</h3>
          </div>
          <button onClick={onClose} className="btn btn-outline btn-sm">Close</button>
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 8, padding: '10px 14px', margin: '10px 0 14px' }}>
          <p style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.03em', margin: '0 0 4px' }}>
            Step {stepIndex + 1} of {n}
          </p>
          <p style={{ fontSize: 14, margin: 0, lineHeight: 1.5 }}>{stepsText[stepIndex]}</p>
        </div>

        <div
          ref={pitchRef}
          className="pitch-card"
          style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', touchAction: 'none', overflow: 'hidden' }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {layout.boxOutline && (
            <div style={{ position: 'absolute', inset: '10%', border: '2px dashed rgba(255,255,255,0.4)', borderRadius: 8, pointerEvents: 'none' }} />
          )}
          {layout.circleOutline && (
            <div style={{
              position: 'absolute',
              left: `${layout.circleOutline.x - layout.circleOutline.r}%`,
              top: `${layout.circleOutline.y - layout.circleOutline.r}%`,
              width: `${layout.circleOutline.r * 2}%`,
              height: `${layout.circleOutline.r * 2}%`,
              border: '2px dashed rgba(255,255,255,0.4)', borderRadius: '50%', pointerEvents: 'none'
            }} />
          )}
          {layout.goalRect && (
            <div style={{
              position: 'absolute', left: `${layout.goalRect.x}%`, top: `${layout.goalRect.y}%`,
              width: `${layout.goalRect.w}%`, height: `${layout.goalRect.h}%`,
              border: '3px solid rgba(255,255,255,0.55)',
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 6px, transparent 6px 12px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.12) 0 6px, transparent 6px 12px)',
              pointerEvents: 'none'
            }} />
          )}
          {(layout.zoneLines || []).map((x, i) => (
            <div key={i} style={{ position: 'absolute', left: `${x}%`, top: '6%', bottom: '6%', borderLeft: '2px dashed rgba(255,255,255,0.35)', pointerEvents: 'none' }} />
          ))}
          {(layout.cones || []).map((c, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${c.x}%`, top: `${c.y}%`, transform: 'translate(-50%, -50%)',
              width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
              borderBottom: '13px solid var(--orange)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.35))', pointerEvents: 'none'
            }} />
          ))}

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <marker id="drillArrowHead" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.92)" />
              </marker>
            </defs>
            {currentFrame.arrows.map((a, i) => {
              usedArrowTypes.add(a.type)
              let d
              if (a.type === 'dribble') d = zigzagPath(a.from.x, a.from.y, a.to.x, a.to.y)
              else if (a.type === 'run') d = curvePath(a.from.x, a.from.y, a.to.x, a.to.y)
              else d = `M ${a.from.x} ${a.from.y} L ${a.to.x} ${a.to.y}`
              return (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="rgba(255,255,255,0.92)"
                  strokeWidth={a.type === 'run' ? 1 : 1.3}
                  strokeDasharray={a.type === 'run' ? '2.2 2.2' : undefined}
                  markerEnd="url(#drillArrowHead)"
                />
              )
            })}
          </svg>

          {currentFrame.roles.map((pos, i) => {
            const manual = manualPositions[`role-${i}`]
            const x = manual ? manual.x : pos.x
            const y = manual ? manual.y : pos.y
            const type = pattern.roles[i] ? pattern.roles[i].type : 'attacker'
            const style = ROLE_STYLE[type]
            return (
              <div
                key={i}
                onPointerDown={(e) => handlePointerDown(e, `role-${i}`)}
                style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)', cursor: 'grab', touchAction: 'none', userSelect: 'none' }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', background: style.bg, border: `2px solid ${style.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 11,
                  color: style.text, boxShadow: '0 2px 6px rgba(0,0,0,0.3), inset 0 -3px 4px rgba(0,0,0,0.12)'
                }}>
                  {i + 1}
                </div>
              </div>
            )
          })}

          {extraPlayers.map((p) => {
            const manual = manualPositions[p.key]
            const x = manual ? manual.x : p.x
            const y = manual ? manual.y : p.y
            return (
              <div
                key={p.key}
                onPointerDown={(e) => handlePointerDown(e, p.key)}
                style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)', cursor: 'grab', touchAction: 'none', userSelect: 'none' }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.7)', border: '2px dashed var(--ink-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'var(--ink-soft)'
                }}>
                  +
                </div>
              </div>
            )
          })}

          {currentFrame.ball && (
            <div style={{ position: 'absolute', left: `${currentFrame.ball.x}%`, top: `${currentFrame.ball.y}%`, transform: 'translate(-50%, -50%)', fontSize: 18, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))', pointerEvents: 'none' }}>
              ⚽
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 10, fontSize: 11.5, color: 'var(--ink-soft)' }}>
          {Array.from(new Set(pattern.roles.map((r) => r.type))).map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: ROLE_STYLE[t].bg, border: `2px solid ${ROLE_STYLE[t].border}`, display: 'inline-block' }} />
              {ROLE_LABEL[t]}
            </span>
          ))}
          {['pass', 'run', 'dribble'].filter((t) => usedArrowTypes.has(t)).map((t) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="22" height="10">
                {t === 'dribble' ? (
                  <path d="M1,5 L6,2 L11,8 L16,2 L21,5" stroke="var(--ink-soft)" fill="none" strokeWidth="1.4" />
                ) : (
                  <line x1="1" y1="5" x2="21" y2="5" stroke="var(--ink-soft)" strokeWidth="1.4" strokeDasharray={t === 'run' ? '2.5 2.5' : undefined} />
                )}
              </svg>
              {ARROW_STYLE_LABEL[t]}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={prevStep} className="btn btn-outline btn-sm">◀ Prev</button>
          <button onClick={() => setPlaying((p) => !p)} className="btn btn-primary btn-sm">{playing ? '❚❚ Pause' : '▶ Play'}</button>
          <button onClick={nextStep} className="btn btn-outline btn-sm">Next ▶</button>
          <span style={{ width: 1, height: 22, background: 'var(--line)', margin: '0 4px' }} />
          <button onClick={addPlayer} className="btn btn-outline btn-sm">+ Add player</button>
          <button onClick={removePlayer} className="btn btn-outline btn-sm">− Remove player</button>
          <button onClick={resetLayout} className="btn btn-outline btn-sm">Reset</button>
        </div>
      </div>
    </div>
  )
}
