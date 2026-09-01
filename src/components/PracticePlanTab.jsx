import { useState } from 'react'
import {
  AGES, SKILL_LEVELS, FOCUS_OPTIONS, MAX_FOCUS, STYLE_OPTIONS,
  GAME_FORMATS, DURATIONS, CATEGORY_LABEL, DRILLS, generatePlan
} from '../lib/gameData'
import FormationIcon from './FormationIcon'
import DrillDiagram from './DrillDiagram'

const STEPS = ['age', 'skill', 'focus', 'identity', 'gameFormat', 'duration', 'players']
const CATEGORY_FILTERS = ['all', 'warmup', 'technical', 'ssg', 'cooldown']

export default function PracticePlanTab({ team }) {
  const [phase, setPhase] = useState('wizard')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    age: 10, skill: null, focus: [], identity: 'blend',
    gameFormat: team.game_format || '9v9', duration: 60, players: 14
  })
  const [plan, setPlan] = useState([])
  const [browserOpen, setBrowserOpen] = useState(false)
  const [swapKey, setSwapKey] = useState(null)
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterFocus, setFilterFocus] = useState('all')
  const [search, setSearch] = useState('')
  const [diagramDrill, setDiagramDrill] = useState(null)

  const key = STEPS[step]

  function canAdvance() {
    if (key === 'skill') return !!answers.skill
    if (key === 'focus') return answers.focus.length > 0
    return true
  }

  function toggleFocus(id) {
    setAnswers((prev) => {
      const has = prev.focus.includes(id)
      if (has) return { ...prev, focus: prev.focus.filter((f) => f !== id) }
      if (prev.focus.length >= MAX_FOCUS) return prev
      return { ...prev, focus: [...prev.focus, id] }
    })
  }

  function buildPlan() {
    return generatePlan({
      age: answers.age, skill: answers.skill, focuses: answers.focus,
      duration: answers.duration, style: answers.identity, gameFormat: answers.gameFormat
    })
  }

  function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      setPlan(buildPlan())
      setPhase('plan')
    }
  }

  function back() {
    if (step > 0) setStep(step - 1)
  }

  function startOver() {
    setPhase('wizard')
    setStep(0)
    setBrowserOpen(false)
    setSwapKey(null)
  }

  function regenerate() {
    setPlan(buildPlan())
    setBrowserOpen(false)
    setSwapKey(null)
  }

  function updateMinutes(segKey, value) {
    const minutes = Math.max(0, Number(value) || 0)
    setPlan((prev) => prev.map((s) => (s.key === segKey ? { ...s, minutes } : s)))
  }

  function removeSegment(segKey) {
    setPlan((prev) => prev.filter((s) => s.key !== segKey))
  }

  function openSwap(segKey) {
    setSwapKey(segKey)
    setBrowserOpen(true)
    setFilterCategory('all')
    setFilterFocus('all')
    setSearch('')
  }

  function openAdd() {
    setSwapKey(null)
    setBrowserOpen(true)
    setFilterCategory('all')
    setFilterFocus('all')
    setSearch('')
  }

  function closeBrowser() {
    setBrowserOpen(false)
    setSwapKey(null)
  }

  function pickDrillFromBrowser(drill) {
    if (swapKey) {
      setPlan((prev) => prev.map((s) => (s.key === swapKey ? { ...s, category: drill.category, drill } : s)))
    } else {
      const newKey = `manual-${Date.now()}-${drill.id}`
      setPlan((prev) => [...prev, { key: newKey, category: drill.category, minutes: 10, drill }])
    }
    closeBrowser()
  }

  const totalMinutes = plan.reduce((a, s) => a + (s.minutes || 0), 0)

  const filteredDrills = DRILLS.filter((d) => {
    if (filterCategory !== 'all' && d.category !== filterCategory) return false
    if (filterFocus !== 'all' && !d.focus.includes(filterFocus)) return false
    if (search.trim() && !d.name.toLowerCase().includes(search.trim().toLowerCase())) return false
    return true
  })

  if (phase === 'wizard') {
    return (
      <div className="card" style={{ maxWidth: 600 }}>
        <p className="section-title">Step {step + 1} of {STEPS.length}</p>

        {key === 'age' && (
          <div>
            <h3>What age group are you coaching?</h3>
            {AGES.map((a) => (
              <span key={a} className={`chip ${answers.age === a ? 'chip-active' : ''}`} onClick={() => setAnswers({ ...answers, age: a })}>U{a}</span>
            ))}
          </div>
        )}

        {key === 'skill' && (
          <div>
            <h3>What's the competitive level?</h3>
            {SKILL_LEVELS.map((s) => (
              <div key={s.id} className={`chip chip-block ${answers.skill === s.id ? 'chip-active' : ''}`} onClick={() => setAnswers({ ...answers, skill: s.id })}>
                <strong>{s.name}</strong>
                <div className="chip-sub">{s.tagline}</div>
              </div>
            ))}
          </div>
        )}

        {key === 'focus' && (
          <div>
            <h3>What do you want to work on? (up to {MAX_FOCUS})</h3>
            {FOCUS_OPTIONS.map((f) => (
              <span key={f.id} className={`chip ${answers.focus.includes(f.id) ? 'chip-active' : ''}`} onClick={() => toggleFocus(f.id)}>{f.name}</span>
            ))}
          </div>
        )}

        {key === 'identity' && (
          <div>
            <h3>Training identity</h3>
            {STYLE_OPTIONS.map((s) => (
              <div key={s.id} className={`chip chip-block ${answers.identity === s.id ? 'chip-active' : ''}`} onClick={() => setAnswers({ ...answers, identity: s.id })}>
                <strong>{s.name}</strong>
                <div className="chip-sub">{s.tagline}</div>
              </div>
            ))}
          </div>
        )}

        {key === 'gameFormat' && (
          <div>
            <h3>What format does this team play?</h3>
            {GAME_FORMATS.map((g) => (
              <span key={g.id} className={`chip ${answers.gameFormat === g.id ? 'chip-active' : ''}`} onClick={() => setAnswers({ ...answers, gameFormat: g.id })}>{g.name}</span>
            ))}
          </div>
        )}

        {key === 'duration' && (
          <div>
            <h3>How long is the session?</h3>
            {DURATIONS.map((d) => (
              <span key={d} className={`chip ${answers.duration === d ? 'chip-active' : ''}`} onClick={() => setAnswers({ ...answers, duration: d })}>{d} min</span>
            ))}
          </div>
        )}

        {key === 'players' && (
          <div>
            <h3>How many players will be there?</h3>
            <button className="btn btn-outline btn-sm" onClick={() => setAnswers({ ...answers, players: Math.max(6, answers.players - 1) })}>−</button>
            <span className="stat-number" style={{ margin: '0 16px', fontSize: 22 }}>{answers.players}</span>
            <button className="btn btn-outline btn-sm" onClick={() => setAnswers({ ...answers, players: answers.players + 1 })}>+</button>
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          {step > 0 && <button onClick={back} className="btn btn-outline" style={{ marginRight: 8 }}>Back</button>}
          <button onClick={next} disabled={!canAdvance()} className="btn btn-primary">{step === STEPS.length - 1 ? 'Build the plan' : 'Next'}</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h2 style={{ margin: 0 }}>Today's plan — <span className="stat-number">{totalMinutes} min</span></h2>
        <div>
          <button onClick={openAdd} className="btn btn-secondary btn-sm" style={{ marginRight: 8 }}>+ Add a drill</button>
          <button onClick={regenerate} className="btn btn-outline btn-sm" style={{ marginRight: 8 }}>Shuffle drills</button>
          <button onClick={startOver} className="btn btn-outline btn-sm">Start over</button>
        </div>
      </div>

      {browserOpen && (
        <div className="card" style={{ marginBottom: 20, background: 'var(--bg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <p style={{ fontWeight: 700, margin: 0 }}>
              {swapKey ? 'Pick a replacement drill' : 'Browse all drills'}
            </p>
            <button onClick={closeBrowser} className="btn btn-outline btn-sm">Close</button>
          </div>

          <input
            className="field"
            placeholder="Search drills by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: 10 }}
          />

          <div style={{ marginBottom: 6 }}>
            {CATEGORY_FILTERS.map((c) => (
              <span key={c} className={`chip ${filterCategory === c ? 'chip-active' : ''}`} onClick={() => setFilterCategory(c)} style={{ fontSize: 12, padding: '6px 12px' }}>
                {c === 'all' ? 'All categories' : CATEGORY_LABEL[c]}
              </span>
            ))}
          </div>
          <div style={{ marginBottom: 14 }}>
            <span className={`chip chip-orange ${filterFocus === 'all' ? 'chip-active' : ''}`} onClick={() => setFilterFocus('all')} style={{ fontSize: 12, padding: '6px 12px' }}>All focuses</span>
            {FOCUS_OPTIONS.map((f) => (
              <span key={f.id} className={`chip chip-orange ${filterFocus === f.id ? 'chip-active' : ''}`} onClick={() => setFilterFocus(f.id)} style={{ fontSize: 12, padding: '6px 12px' }}>
                {f.name}
              </span>
            ))}
          </div>

          <div style={{ maxHeight: 360, overflowY: 'auto', border: '1px solid var(--line)', borderRadius: 10, background: '#fff' }}>
            {filteredDrills.length === 0 ? (
              <p style={{ padding: 14, color: 'var(--ink-soft)', fontSize: 13.5 }}>No drills match those filters.</p>
            ) : (
              filteredDrills.map((d) => (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderBottom: '1px solid var(--line)' }}>
                  <div className="drill-icon-box" style={{ width: 38, height: 38 }}>
                    <FormationIcon type={d.formation} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: 13.5 }}>{d.name}</strong>
                      <span className="badge">{CATEGORY_LABEL[d.category]}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--ink-soft)', margin: '3px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.summary}</p>
                  </div>
                  <button onClick={() => pickDrillFromBrowser(d)} className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
                    {swapKey ? 'Use this' : 'Add'}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {plan.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No drills in this plan yet — add one above.</p>
      ) : (
        plan.map((seg) => {
          const d = seg.drill
          const note = d.levelNotes && d.levelNotes[answers.skill]
          return (
            <div key={seg.key} className="card" style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <div
                  className="drill-icon-box"
                  onClick={() => setDiagramDrill(d)}
                  title="View interactive diagram"
                  style={{ cursor: 'pointer' }}
                >
                  <FormationIcon type={d.formation} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <span className="badge">{CATEGORY_LABEL[seg.category]}</span>
                      <h3 style={{ margin: '6px 0', fontSize: 17 }}>{d.name}</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input
                        type="number"
                        className="field"
                        value={seg.minutes}
                        onChange={(e) => updateMinutes(seg.key, e.target.value)}
                        style={{ width: 60, padding: '6px 8px', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>min</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--ink)', marginTop: 6 }}>{d.summary}</p>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 220 }}>
                      <p style={{ fontWeight: 700, fontSize: 12.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>How to run it</p>
                      <ol style={{ paddingLeft: 18, fontSize: 13.5 }}>
                        {d.steps.map((s, i) => <li key={i}>{s}</li>)}
                      </ol>
                    </div>
                    <div style={{ flex: 1, minWidth: 220 }}>
                      <p style={{ fontWeight: 700, fontSize: 12.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Coaching points</p>
                      <ul style={{ paddingLeft: 18, fontSize: 13.5 }}>
                        {d.points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Equipment: {d.equipment.join(', ')}</p>
                  {note && <p style={{ fontSize: 12.5, background: 'var(--green-light)', color: 'var(--green-dark)', padding: 10, borderRadius: 8 }}><strong>For {answers.skill}:</strong> {note}</p>}
                  <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                    <button onClick={() => setDiagramDrill(d)} className="btn btn-secondary btn-sm">View on field</button>
                    <button onClick={() => openSwap(seg.key)} className="btn btn-outline btn-sm">Swap drill</button>
                    <button onClick={() => removeSegment(seg.key)} className="btn btn-danger btn-sm">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}

      {diagramDrill && (
        <DrillDiagram drill={diagramDrill} onClose={() => setDiagramDrill(null)} />
      )}
    </div>
  )
}
