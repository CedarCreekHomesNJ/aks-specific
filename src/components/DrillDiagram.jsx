import { useEffect, useRef, useState } from 'react'
import { DRILL_LAYOUTS } from '../lib/gameData'

const ANIM_CONFIGS = {
  grid: {
    ball: [{ x: 20, y: 20 }, { x: 50, y: 20 }, { x: 50, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 80 }, { x: 50, y: 80 }, { x: 80, y: 80 }, { x: 80, y: 50 }, { x: 80, y: 20 }, { x: 20, y: 20 }],
    movers: [{ num: 1, path: [{ x: 20, y: 20 }, { x: 50, y: 20 }, { x: 50, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 80 }, { x: 50, y: 80 }, { x: 80, y: 80 }, { x: 80, y: 50 }, { x: 80, y: 20 }, { x: 20, y: 20 }] }]
  },
  gates: {
    ball: [{ x: 50, y: 20 }, { x: 24, y: 45 }, { x: 66, y: 65 }, { x: 50, y: 20 }],
    movers: [{ num: 3, path: [{ x: 50, y: 20 }, { x: 24, y: 45 }, { x: 66, y: 65 }, { x: 50, y: 20 }] }]
  },
  circle: {
    ball: [{ x: 50, y: 20 }, { x: 78, y: 63 }, { x: 22, y: 63 }, { x: 50, y: 20 }],
    movers: []
  },
  box: {
    ball: [{ x: 35, y: 35 }, { x: 65, y: 35 }, { x: 65, y: 65 }, { x: 35, y: 65 }, { x: 35, y: 35 }],
    movers: []
  },
  goal: {
    ball: [{ x: 50, y: 18 }, { x: 50, y: 50 }, { x: 50, y: 8 }],
    movers: [{ num: 2, path: [{ x: 50, y: 65 }, { x: 50, y: 40 }, { x: 50, y: 30 }] }]
  },
  zones: {
    ball: [{ x: 16, y: 50 }, { x: 50, y: 50 }, { x: 83, y: 50 }, { x: 16, y: 50 }],
    movers: [{ num: 1, path: [{ x: 16, y: 35 }, { x: 50, y: 35 }, { x: 83, y: 35 }, { x: 16, y: 35 }] }]
  },
  line: {
    ball: [{ x: 15, y: 50 }, { x: 38, y: 50 }, { x: 61, y: 50 }, { x: 84, y: 50 }, { x: 15, y: 50 }],
    movers: []
  },
  pairs: {
    ball: [{ x: 32, y: 50 }, { x: 68, y: 50 }, { x: 32, y: 50 }],
    movers: []
  }
}

function buildInitialPlayers(layout) {
  return (layout.players || []).map((p, i) => ({ id: `p${i}-${Date.now()}`, num: i + 1, x: p.x, y: p.y }))
}

export default function DrillDiagram({ drill, onClose }) {
  const layout = DRILL_LAYOUTS[drill.formation] || {}
  const anim = ANIM_CONFIGS[drill.formation] || null
  const movingNums = new Set((anim && anim.movers || []).map((m) => m.num))
  const [players, setPlayers] = useState(() => buildInitialPlayers(layout))
  const [animating, setAnimating] = useState(false)
  const [ballPos, setBallPos] = useState(anim && anim.ball.length ? anim.ball[0] : null)
  const frameRef = useRef(0)
  const intervalRef = useRef(null)
  const pitchRef = useRef(null)
  const draggingRef = useRef(null)

  useEffect(() => {
    stopAnimation()
    setPlayers(buildInitialPlayers(layout))
    setBallPos(anim && anim.ball.length ? anim.ball[0] : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drill.id])

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  function clampPercent(n) {
    return Math.max(4, Math.min(96, n))
  }

  function playAnimation() {
    if (!anim) return
    setAnimating(true)
    frameRef.current = 0
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      frameRef.current += 1
      const ballIdx = frameRef.current % anim.ball.length
      setBallPos(anim.ball[ballIdx])
      setPlayers((prev) => prev.map((p) => {
        const mover = anim.movers.find((m) => m.num === p.num)
        if (!mover) return p
        const idx = frameRef.current % mover.path.length
        return { ...p, x: mover.path[idx].x, y: mover.path[idx].y }
      }))
    }, 900)
  }

  function stopAnimation() {
    setAnimating(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  function handlePointerDown(e, id) {
    if (animating) return
    e.preventDefault()
    draggingRef.current = id
    try { e.target.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handlePointerMove(e) {
    if (!draggingRef.current || !pitchRef.current) return
    const rect = pitchRef.current.getBoundingClientRect()
    const x = clampPercent(((e.clientX - rect.left) / rect.width) * 100)
    const y = clampPercent(((e.clientY - rect.top) / rect.height) * 100)
    setPlayers((prev) => prev.map((p) => (p.id === draggingRef.current ? { ...p, x, y } : p)))
  }

  function handlePointerUp() {
    draggingRef.current = null
  }

  function addPlayer() {
    setPlayers((prev) => [...prev, { id: `extra-${Date.now()}`, num: prev.length + 1, x: 50, y: 50 }])
  }

  function removePlayer() {
    setPlayers((prev) => prev.slice(0, -1))
  }

  function resetLayout() {
    stopAnimation()
    setPlayers(buildInitialPlayers(layout))
    setBallPos(anim && anim.ball.length ? anim.ball[0] : null)
  }

  const moveTransition = animating ? 'left 0.85s ease, top 0.85s ease' : 'none'

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(16,24,40,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: 16
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{ maxWidth: 520, width: '100%', maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <span className="badge">{drill.players} players</span>
            <h3 style={{ margin: '6px 0 2px' }}>{drill.name}</h3>
          </div>
          <button onClick={onClose} className="btn btn-outline btn-sm">Close</button>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginBottom: 14 }}>
          {animating
            ? 'Playing a short demo — the amber-ringed player and ball show the movement.'
            : 'Drag the tokens to show players where to go, or press Play for a quick animated demo.'}
        </p>

        <div
          ref={pitchRef}
          className="pitch-card"
          style={{
            position: 'relative', width: '100%', aspectRatio: '4 / 3',
            touchAction: 'none', overflow: 'hidden',
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 40px, rgba(255,255,255,0) 40px 80px)'
          }}
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
              border: '2px dashed rgba(255,255,255,0.4)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }} />
          )}

          {layout.goalRect && (
            <div style={{
              position: 'absolute',
              left: `${layout.goalRect.x}%`,
              top: `${layout.goalRect.y}%`,
              width: `${layout.goalRect.w}%`,
              height: `${layout.goalRect.h}%`,
              border: '3px solid rgba(255,255,255,0.6)',
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 6px, transparent 6px 12px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.12) 0 6px, transparent 6px 12px)',
              pointerEvents: 'none'
            }} />
          )}

          {(layout.zoneLines || []).map((x, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${x}%`, top: '6%', bottom: '6%',
              borderLeft: '2px dashed rgba(255,255,255,0.35)', pointerEvents: 'none'
            }} />
          ))}

          {(layout.cones || []).map((c, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${c.x}%`, top: `${c.y}%`,
              transform: 'translate(-50%, -50%)',
              width: 0, height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderBottom: '13px solid var(--orange)',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.35))',
              pointerEvents: 'none'
            }} />
          ))}

          {players.map((p) => {
            const isMover = movingNums.has(p.num)
            const highlight = animating && isMover
            return (
              <div
                key={p.id}
                onPointerDown={(e) => handlePointerDown(e, p.id)}
                style={{
                  position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: moveTransition,
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(160deg, #fff 0%, #e4e9ee 100%)',
                  border: highlight ? '3px solid var(--orange)' : '2px solid var(--green-dark)',
                  boxShadow: highlight
                    ? '0 0 0 4px rgba(251,106,44,0.25), 0 2px 6px rgba(0,0,0,0.3)'
                    : '0 2px 6px rgba(0,0,0,0.3), inset 0 -3px 4px rgba(0,0,0,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 13,
                  color: 'var(--green-dark)', cursor: animating ? 'default' : 'grab', touchAction: 'none',
                  userSelect: 'none'
                }}
              >
                {p.num}
              </div>
            )
          })}

          {ballPos && (
            <div style={{
              position: 'absolute', left: `${ballPos.x}%`, top: `${ballPos.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: moveTransition,
              fontSize: 18, lineHeight: 1,
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
              pointerEvents: 'none'
            }}>
              ⚽
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
          {anim && (
            animating ? (
              <button onClick={stopAnimation} className="btn btn-primary btn-sm">■ Stop</button>
            ) : (
              <button onClick={playAnimation} className="btn btn-primary btn-sm">▶ Play demo</button>
            )
          )}
          <button onClick={addPlayer} className="btn btn-outline btn-sm">+ Add player</button>
          <button onClick={removePlayer} className="btn btn-outline btn-sm">− Remove player</button>
          <button onClick={resetLayout} className="btn btn-outline btn-sm">Reset layout</button>
        </div>
      </div>
    </div>
  )
}
