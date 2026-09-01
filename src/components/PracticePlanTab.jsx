import { useState } from 'react'
import {
  AGES, SKILL_LEVELS, FOCUS_OPTIONS, MAX_FOCUS, STYLE_OPTIONS,
  GAME_FORMATS, DURATIONS, CATEGORY_LABEL, generatePlan
} from '../lib/gameData'
import FormationIcon from './FormationIcon'

const STEPS = ['age', 'skill', 'focus', 'identity', 'gameFormat', 'duration', 'players']

export default function PracticePlanTab({ team }) {
  const [phase, setPhase] = useState('wizard')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    age: 10, skill: null, focus: [], identity: 'blend',
    gameFormat: team.game_format || '9v9', duration: 60, players: 14
  })
  const [plan, setPlan] = useState([])

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
  }

  function regenerate() {
    setPlan(buildPlan())
  }

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
    <div style={{ maxWidth: 720 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h2 style={{ margin: 0 }}>Today's plan — <span className="stat-number">{answers.duration} min</span></h2>
        <div>
          <button onClick={regenerate} className="btn btn-outline btn-sm" style={{ marginRight: 8 }}>Shuffle drills</button>
          <button onClick={startOver} className="btn btn-outline btn-sm">Start over</button>
        </div>
      </div>

      {plan.map((seg) => {
        const d = seg.drill
        const note = d.levelNotes && d.levelNotes[answers.skill]
        return (
          <div key={seg.key} className="card" style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', gap: 14 }}>
              <div className="drill-icon-box">
                <FormationIcon type={d.formation} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="badge">{CATEGORY_LABEL[seg.category]}</span>
                    <h3 style={{ margin: '6px 0', fontSize: 17 }}>{d.name}</h3>
                  </div>
                  <div className="stat-number" style={{ fontSize: 20 }}>{seg.minutes}<span style={{ fontSize: 12, fontWeight: 600 }}> min</span></div>
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
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
