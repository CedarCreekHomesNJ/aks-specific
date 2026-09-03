import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'
import { GAME_FORMATS, OBJECTIVES, pickFormation, assignRosterToFormation } from '../lib/gameData'
import PitchLines from './PitchLines'

const HALF_LENGTHS = [30, 35, 40, 45]
const OPPONENT_COUNT = 11

function fmtTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function initialsOf(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}

function OpponentCircle({ idx, isDragging, dragPos, mode, pos, onPointerDown, onPointerMove, onPointerUp }) {
  let style
  if (isDragging) {
    style = { position: 'fixed', left: dragPos.x, top: dragPos.y, transform: 'translate(-50%, -50%)', zIndex: 2000, cursor: 'grabbing', touchAction: 'none', userSelect: 'none' }
  } else if (mode === 'pitch') {
    style = { position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)', cursor: 'grab', touchAction: 'none', userSelect: 'none' }
  } else {
    style = { cursor: 'grab', touchAction: 'none', userSelect: 'none' }
  }
  return (
    <div onPointerDown={(e) => onPointerDown(e, idx)} onPointerMove={onPointerMove} onPointerUp={onPointerUp} style={style}>
      <div style={{
        width: mode === 'pitch' || isDragging ? 32 : 30, height: mode === 'pitch' || isDragging ? 32 : 30, borderRadius: '50%',
        background: 'linear-gradient(160deg, #ffdcd2 0%, #ffb3a0 100%)',
        border: '2px solid #C23B22',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 11, color: '#8f2a17',
        boxShadow: '0 2px 6px rgba(0,0,0,0.35)'
      }}>
        {idx + 1}
      </div>
    </div>
  )
}

function GameModePitch({
  gmPitchRef, onFieldPlayers, gameModePositions, pendingSubOff, paceDelta,
  handleGmPointerDown, handleGmPointerMove, handleGmPointerUp,
  canvasRef, drawMode, handleDrawPointerDown, handleDrawPointerMove, handleDrawPointerUp,
  oppPositions, oppDrag, handleOppPointerDown, handleOppPointerMove, handleOppPointerUp
}) {
  return (
    <div
      ref={gmPitchRef}
      className="pitch-card"
      style={{
        width: 'min(94vw, calc((100vh - 190px) / 1.4))',
        aspectRatio: '1 / 1.4',
        flexShrink: 0,
        position: 'relative',
        touchAction: 'none'
      }}
      onPointerMove={handleGmPointerMove}
      onPointerUp={handleGmPointerUp}
      onPointerLeave={handleGmPointerUp}
    >
      <PitchLines />
      {onFieldPlayers.filter((p) => p.x != null).map((p) => {
        const custom = gameModePositions[p.id]
        const dx = custom ? custom.x : p.x
        const dy = custom ? custom.y : p.y
        const over = paceDelta(p) > 60
        const selected = pendingSubOff === p.id
        return (
          <div
            key={p.id}
            onPointerDown={(e) => handleGmPointerDown(e, p.id)}
            style={{ position: 'absolute', left: `${dx}%`, top: `${100 - dy}%`, transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'grab', touchAction: 'none', userSelect: 'none' }}
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

      {oppPositions.map((pos, idx) => {
        if (!pos) return null
        const isDragging = oppDrag && oppDrag.idx === idx
        return (
          <OpponentCircle
            key={`opp-${idx}`}
            idx={idx}
            isDragging={isDragging}
            dragPos={oppDrag}
            mode="pitch"
            pos={pos}
            onPointerDown={handleOppPointerDown}
            onPointerMove={handleOppPointerMove}
            onPointerUp={handleOppPointerUp}
          />
        )
      })}

      <canvas
        ref={canvasRef}
        onPointerDown={handleDrawPointerDown}
        onPointerMove={handleDrawPointerMove}
        onPointerUp={handleDrawPointerUp}
        onPointerLeave={handleDrawPointerUp}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          pointerEvents: drawMode ? 'auto' : 'none',
          touchAction: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitTouchCallout: 'none',
          cursor: drawMode ? 'crosshair' : 'default'
        }}
      />
    </div>
  )
}

function OpponentTray({ oppPositions, oppDrag, handleOppPointerDown, handleOppPointerMove, handleOppPointerUp, resetOpponents }) {
  const trayIndices = oppPositions.map((pos, idx) => ({ pos, idx })).filter(({ pos }) => pos === null)
  const placedCount = oppPositions.filter((p) => p !== null).length

  return (
    <div style={{ minWidth: 130 }}>
      <p className="section-title" style={{ color: '#fff' }}>Opponent (drag onto pitch)</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 130 }}>
        {trayIndices.map(({ idx }) => (
          <OpponentCircle
            key={`tray-${idx}`}
            idx={idx}
            isDragging={oppDrag && oppDrag.idx === idx}
            dragPos={oppDrag}
            mode="tray"
            onPointerDown={handleOppPointerDown}
            onPointerMove={handleOppPointerMove}
            onPointerUp={handleOppPointerUp}
          />
        ))}
      </div>
      {placedCount > 0 && (
        <button onClick={resetOpponents} className="btn btn-outline btn-sm" style={{ marginTop: 10 }}>Reset opponents</button>
      )}
    </div>
  )
}

function BenchSidebar({ benchPlayers, pendingSubOff, paceDelta, performSub }) {
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

export default function FormationAssistantTab({ team }) {
  const [roster, setRoster] = useState([])
  const [loading, setLoading] = useState(true)
  const [format, setFormat] = useState(team.game_format || '11v11')
  const [objective, setObjective] = useState('balanced')
  const [customPositions, setCustomPositions] = useState({})
  const pitchRef = useRef(null)
  const draggingRef = useRef(null)

  const [gameStarted, setGameStarted] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)
  const [halfLengthMinutes, setHalfLengthMinutes] = useState(30)
  const [clockRunning, setClockRunning] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [players, setPlayers] = useState([])
  const [pendingSubOff, setPendingSubOff] = useState(null)
  const [starterTargetPct, setStarterTargetPct] = useState(67)
  const [subTargetPct, setSubTargetPct] = useState(33)
  const [gameModePositions, setGameModePositions] = useState({})
  const [gameEvents, setGameEvents] = useState([])
  const [selectedEventId, setSelectedEventId] = useState('')
  const [savingGame, setSavingGame] = useState(false)
  const [seasonStats, setSeasonStats] = useState([])
  const [seasonLoading, setSeasonLoading] = useState(true)
  const [drawMode, setDrawMode] = useState(false)
  const [drawTool, setDrawTool] = useState('pen')
  const [hasDrawing, setHasDrawing] = useState(false)
  const [oppPositions, setOppPositions] = useState(() => Array(OPPONENT_COUNT).fill(null))
  const [oppDrag, setOppDrag] = useState(null)
  const tickRef = useRef(null)
  const gmPitchRef = useRef(null)
  const gmDragRef = useRef(null)
  const canvasRef = useRef(null)
  const drawActiveRef = useRef(false)

  useEffect(() => {
    loadRoster()
    loadGameEvents()
    loadSeasonStats()
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

  useEffect(() => {
    if (!fullScreen) {
      setDrawMode(false)
      return
    }
    const canvas = canvasRef.current
    const container = gmPitchRef.current
    if (!canvas || !container) return

    function resize() {
      const rect = container.getBoundingClientRect()
      const w = Math.round(rect.width)
      const h = Math.round(rect.height)
      if (canvas.width !== w) canvas.width = w
      if (canvas.height !== h) canvas.height = h
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)
    return () => ro.disconnect()
  }, [fullScreen])

  async function loadRoster() {
    setLoading(true)
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('team_id', team.id)
    if (!error) setRoster(data)
    setLoading(false)
  }

  async function loadGameEvents() {
    const { data, error } = await supabase
      .from('schedule_events')
      .select('*')
      .eq('team_id', team.id)
      .eq('type', 'game')
      .order('event_date', { ascending: false })
    if (!error) setGameEvents(data)
  }

  async function loadSeasonStats() {
    setSeasonLoading(true)
    const { data: sessions, error: sessionsError } = await supabase
      .from('game_sessions')
      .select('id')
      .eq('team_id', team.id)
    if (sessionsError || !sessions.length) {
      setSeasonStats([])
      setSeasonLoading(false)
      return
    }
    const sessionIds = sessions.map((s) => s.id)
    const { data: times, error: timesError } = await supabase
      .from('game_player_times')
      .select('*')
      .in('game_session_id', sessionIds)
    if (timesError) {
      setSeasonStats([])
      setSeasonLoading(false)
      return
    }
    const byPlayer = {}
    times.forEach((t) => {
      if (!byPlayer[t.player_name]) byPlayer[t.player_name] = { name: t.player_name, totalSeconds: 0, games: 0 }
      byPlayer[t.player_name].totalSeconds += t.played_seconds || 0
      byPlayer[t.player_name].games += 1
    })
    const list = Object.values(byPlayer).sort((a, b) => b.totalSeconds - a.totalSeconds)
    setSeasonStats(list)
    setSeasonLoading(false)
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

  function startGameDay() {
    const starters = slots
      .filter((s) => s.player)
      .map((s) => ({ id: s.player.id, name: s.player.name, role: s.role, tier: 'starter', onField: true, playedSeconds: 0, x: s.x, y: s.y }))
    const subs = bench.map((p) => ({ id: p.id, name: p.name, role: null, tier: 'sub', onField: false, playedSeconds: 0, x: null, y: null }))
    setPlayers([...starters, ...subs])
    setElapsedSeconds(0)
    setClockRunning(false)
    setPendingSubOff(null)
    setGameModePositions({})
    setOppPositions(Array(OPPONENT_COUNT).fill(null))
    setGameStarted(true)
  }

  async function endGameDay() {
    const confirmed = window.confirm('End this game? Playing time will be saved to your season history.')
    if (!confirmed) return
    setClockRunning(false)
    setSavingGame(true)

    const { data: session, error: sessionError } = await supabase
      .from('game_sessions')
      .insert({
        team_id: team.id,
        event_id: selectedEventId || null,
        half_length_minutes: halfLengthMinutes,
        total_seconds: elapsedSeconds
      })
      .select()
      .single()

    if (!sessionError && session) {
      const rows = players
        .filter((p) => p.playedSeconds > 0)
        .map((p) => ({
          game_session_id: session.id,
          player_id: p.id,
          player_name: p.name,
          tier: p.tier,
          played_seconds: p.playedSeconds
        }))
      if (rows.length) {
        await supabase.from('game_player_times').insert(rows)
      }
    }

    setSavingGame(false)
    setGameStarted(false)
    setFullScreen(false)
    setPlayers([])
    setElapsedSeconds(0)
    setPendingSubOff(null)
    setGameModePositions({})
    setSelectedEventId('')
    loadSeasonStats()
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

  function handleGmPointerDown(e, id) {
    e.preventDefault()
    gmDragRef.current = { id, startX: e.clientX, startY: e.clientY, moved: false }
    try { e.target.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handleGmPointerMove(e) {
    const drag = gmDragRef.current
    if (!drag || !gmPitchRef.current) return
    const dx = Math.abs(e.clientX - drag.startX)
    const dy = Math.abs(e.clientY - drag.startY)
    if (!drag.moved && (dx > 6 || dy > 6)) drag.moved = true
    if (drag.moved) {
      const rect = gmPitchRef.current.getBoundingClientRect()
      const x = clampPercent(((e.clientX - rect.left) / rect.width) * 100)
      const y = clampPercent(100 - ((e.clientY - rect.top) / rect.height) * 100)
      setGameModePositions((prev) => ({ ...prev, [drag.id]: { x, y } }))
    }
  }

  function handleGmPointerUp() {
    const drag = gmDragRef.current
    if (drag && !drag.moved) {
      selectSubOff(drag.id)
    }
    gmDragRef.current = null
  }

  function resetGameModePositions() {
    setGameModePositions({})
  }

  function handleOppPointerDown(e, idx) {
    e.preventDefault()
    setOppDrag({ idx, x: e.clientX, y: e.clientY })
    try { e.target.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handleOppPointerMove(e) {
    setOppDrag((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : prev))
  }

  function handleOppPointerUp(e) {
    if (!oppDrag) return
    const idx = oppDrag.idx
    if (gmPitchRef.current) {
      const rect = gmPitchRef.current.getBoundingClientRect()
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
      if (inside) {
        const x = clampPercent(((e.clientX - rect.left) / rect.width) * 100)
        const y = clampPercent(((e.clientY - rect.top) / rect.height) * 100)
        setOppPositions((positions) => {
          const next = [...positions]
          next[idx] = { x, y }
          return next
        })
      } else {
        setOppPositions((positions) => {
          const next = [...positions]
          next[idx] = null
          return next
        })
      }
    }
    setOppDrag(null)
  }

  function resetOpponents() {
    setOppPositions(Array(OPPONENT_COUNT).fill(null))
  }

  function handleDrawPointerDown(e) {
    if (!drawMode || !canvasRef.current) return
    e.preventDefault()
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = drawTool === 'eraser' ? 'destination-out' : 'source-over'
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    drawActiveRef.current = true
    try { canvas.setPointerCapture(e.pointerId) } catch (err) { /* ignore */ }
  }

  function handleDrawPointerMove(e) {
    if (!drawMode || !drawActiveRef.current || !canvasRef.current) return
    e.preventDefault()
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = drawTool === 'eraser' ? 'destination-out' : 'source-over'
    ctx.strokeStyle = '#FFD400'
    ctx.lineWidth = drawTool === 'eraser' ? 22 : (e.pointerType === 'pen' ? 3.5 : 5)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    const native = e.nativeEvent
    const coalesced = native && native.getCoalescedEvents ? native.getCoalescedEvents() : null
    const points = coalesced && coalesced.length ? coalesced : [e]
    points.forEach((pt) => {
      ctx.lineTo(pt.clientX - rect.left, pt.clientY - rect.top)
    })
    ctx.stroke()
    setHasDrawing(true)
  }

  function handleDrawPointerUp(e) {
    if (drawMode) e.preventDefault()
    drawActiveRef.current = false
  }

  function clearDrawing() {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    setHasDrawing(false)
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
  const hasGmCustomPositions = Object.keys(gameModePositions).length > 0

  const suggestionBanner = suggestion && (
    <div style={{ background: 'var(--orange-light)', border: '1px solid var(--orange)', borderRadius: 10, padding: 12, marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
      <span style={{ fontSize: 13.5, color: 'var(--orange-dark)', fontWeight: 600 }}>
        💡 Suggested sub: bring on <strong>{suggestion.on.name}</strong> for <strong>{suggestion.off.name}</strong> ({Math.round(paceDelta(suggestion.off) / 60)} min over pace)
      </span>
      <button onClick={() => executeSub(suggestion.off.id, suggestion.on.id)} className="btn btn-primary btn-sm">Make this sub</button>
    </div>
  )

  if (fullScreen) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#0c2417', zIndex: 1000, overflowY: drawMode ? 'hidden' : 'auto', touchAction: drawMode ? 'none' : 'auto', padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <div>
            <span className="stat-number" style={{ color: '#fff', fontSize: 20 }}>{clockLabel}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {clockButtonLabel && (
              <button onClick={() => setClockRunning((r) => !r)} className="btn btn-secondary btn-sm">{clockButtonLabel}</button>
            )}
            <button
              onClick={() => setDrawMode((d) => !d)}
              className={drawMode ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
            >
              ✏️ {drawMode ? 'Drawing on' : 'Draw'}
            </button>
            {drawMode && (
              <>
                <button onClick={() => setDrawTool('pen')} className={drawTool === 'pen' ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}>🖊️ Pen</button>
                <button onClick={() => setDrawTool('eraser')} className={drawTool === 'eraser' ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}>🧹 Eraser</button>
              </>
            )}
            {hasDrawing && (
              <button onClick={clearDrawing} className="btn btn-outline btn-sm">Clear all</button>
            )}
            {hasGmCustomPositions && (
              <button onClick={resetGameModePositions} className="btn btn-outline btn-sm">Reset positions</button>
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
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>
          {drawMode
            ? `${drawTool === 'eraser' ? 'Eraser is on — drag over a line to remove just that part.' : 'Draw mode is on — sketch with your finger or Apple Pencil.'} Turn Draw off to move players again.`
            : 'Tap a player to select them for a sub. Drag a player to reposition them, or drag an opponent circle onto the pitch.'}
        </p>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          <GameModePitch
            gmPitchRef={gmPitchRef}
            onFieldPlayers={onFieldPlayers}
            gameModePositions={gameModePositions}
            pendingSubOff={pendingSubOff}
            paceDelta={paceDelta}
            handleGmPointerDown={handleGmPointerDown}
            handleGmPointerMove={handleGmPointerMove}
            handleGmPointerUp={handleGmPointerUp}
            canvasRef={canvasRef}
            drawMode={drawMode}
            handleDrawPointerDown={handleDrawPointerDown}
            handleDrawPointerMove={handleDrawPointerMove}
            handleDrawPointerUp={handleDrawPointerUp}
            oppPositions={oppPositions}
            oppDrag={oppDrag}
            handleOppPointerDown={handleOppPointerDown}
            handleOppPointerMove={handleOppPointerMove}
            handleOppPointerUp={handleOppPointerUp}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <OpponentTray
              oppPositions={oppPositions}
              oppDrag={oppDrag}
              handleOppPointerDown={handleOppPointerDown}
              handleOppPointerMove={handleOppPointerMove}
              handleOppPointerUp={handleOppPointerUp}
              resetOpponents={resetOpponents}
            />
            <BenchSidebar benchPlayers={benchPlayers} pendingSubOff={pendingSubOff} paceDelta={paceDelta} performSub={performSub} />
          </div>
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
              <PitchLines />
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
                    {gameStarted ? 'Keep this tab open — ending the game saves it to your season history.' : 'Playing time saves to your season history when you end the game.'}
                  </p>
                </div>
                {!gameStarted ? (
                  <button onClick={startGameDay} className="btn btn-primary btn-sm">Start Game Day</button>
                ) : (
                  <div>
                    <button onClick={() => setFullScreen(true)} className="btn btn-secondary btn-sm" style={{ marginRight: 8 }}>Enter Game Mode</button>
                    <button onClick={endGameDay} disabled={savingGame} className="btn btn-danger btn-sm">{savingGame ? 'Saving…' : 'End game'}</button>
                  </div>
                )}
              </div>

              {!gameStarted && (
                <div style={{ marginTop: 14 }}>
                  <p className="section-title">Half length</p>
                  {HALF_LENGTHS.map((m) => (
                    <span key={m} className={`chip ${halfLengthMinutes === m ? 'chip-active' : ''}`} onClick={() => setHalfLengthMinutes(m)}>{m} min</span>
                  ))}

                  {gameEvents.length > 0 && (
                    <div style={{ marginTop: 14 }}>
                      <label className="field-label">Link to a scheduled game (optional)</label>
                      <select className="field" value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)} style={{ maxWidth: 320 }}>
                        <option value="">Not linked to a schedule entry</option>
                        {gameEvents.map((ev) => (
                          <option key={ev.id} value={ev.id}>
                            {ev.event_date}{ev.opponent ? ` vs ${ev.opponent}` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
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
                      <BenchSidebar benchPlayers={benchPlayers} pendingSubOff={pendingSubOff} paceDelta={paceDelta} performSub={performSub} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!gameStarted && (
            <div className="card" style={{ marginTop: 20 }}>
              <h3 style={{ margin: 0 }}>Season playing time</h3>
              <p style={{ fontSize: 12.5, color: 'var(--ink-soft)', margin: '4px 0 14px' }}>Totals across every game you've ended and saved.</p>
              {seasonLoading ? (
                <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Loading…</p>
              ) : seasonStats.length === 0 ? (
                <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>No games recorded yet — playing time will show up here once you end a Game Day session.</p>
              ) : (
                seasonStats.map((s) => (
                  <div key={s.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                    <span style={{ fontSize: 13.5 }}>{s.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{s.games} game{s.games !== 1 ? 's' : ''} · {fmtTime(s.totalSeconds)} total</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
