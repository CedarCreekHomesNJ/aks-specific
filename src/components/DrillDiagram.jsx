import { useEffect, useRef, useState } from 'react'
import { DRILL_LAYOUTS } from '../lib/gameData'

function buildInitialPlayers(layout) {
  return (layout.players || []).map((p, i) => ({ id: `p${i}-${Date.now()}`, num: i + 1, x: p.x, y: p.y }))
}

export default function DrillDiagram({ drill, onClose }) {
  const layout = DRILL_LAYOUTS[drill.formation] || {}
  const [players, setPlayers] = useState(() => buildInitialPlayers(layout))
  const pitchRef = useRef(null)
  const draggingRef = useRef(null)

  useEffect(() => {
    setPlayers(buildInitialPlayers(layout))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drill.id])

  function clampPercent(n) {
    return Math.max(4, Math.min(96, n))
  }

  function handlePointerDown(e, id) {
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
    setPlayers(buildInitialPlayers(layout))
  }

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
          Drag the circles to show players where to go. This is for demonstrating the drill, not your saved roster.
        </p>

        <div
          ref={pitchRef}
          className="pitch-card"
          style={{
            position: 'relative', width: '100%', aspectRatio: '4 / 3',
            touchAction: 'none', overflow: 'hidden'
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
              border: '3px solid rgba(255,255,255,0.55)',
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
              width: 12, height: 12, borderRadius: 3,
              background: 'var(--orange)', boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              pointerEvents: 'none'
            }} />
          ))}

          {players.map((p) => (
            <div
              key={p.id}
              onPointerDown={(e) => handlePointerDown(e, p.id)}
              style={{
                position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
                width: 34, height: 34, borderRadius: '50%',
                background: '#fff', border: '2px solid var(--green-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 13,
                color: 'var(--green-dark)', cursor: 'grab', touchAction: 'none',
                userSelect: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
              }}
            >
              {p.num}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
          <button onClick={addPlayer} className="btn btn-outline btn-sm">+ Add player</button>
          <button onClick={removePlayer} className="btn btn-outline btn-sm">− Remove player</button>
          <button onClick={resetLayout} className="btn btn-outline btn-sm">Reset layout</button>
        </div>
      </div>
    </div>
  )
}
