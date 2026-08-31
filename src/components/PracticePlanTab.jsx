import { useState } from 'react'
import {
  AGES, SKILL_LEVELS, FOCUS_OPTIONS, MAX_FOCUS, STYLE_OPTIONS,
  GAME_FORMATS, DURATIONS, CATEGORY_LABEL, generatePlan
} from '../lib/gameData'

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

  function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    } else {
      const result = generatePlan({
        age: answers.age, skill: answers.skill, focuses: answers.focus,
        duration: answers.duration, style: answers.identity, gameFormat: answers.gameFormat
      })
      setPlan(result)
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
    const result = generatePlan({
      age: answers.age, skill: answers.skill, focuses: answers.focus,
      duration: answers.duration, style: answers.identity, gameFormat: answers.gameFormat
    })
    setPlan(result)
  }

  const chip = (on) => ({
    display: 'inline-block', border: '1px solid #ccc', borderRadius: 4,
    padding: '10px 16px', marginRight: 8, marginBottom: 8, cursor: 'pointer',
    background: on ? '#1F4D3A' : '#fff', color: on ? '#fff' : '#333'
  })

  if (phase === 'wizard') {
    return (
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontSize: 12.5, color: '#999' }}>Step {step + 1} of {STEPS.length}</p>

        {key === 'age' && (
          <div>
            <h3>What age group are you coaching?</h3>
            {AGES.map((a) => (
              <span key={a} style={chip(answers.age === a)} onClick={() => setAnswers({ ...answers, age: a })}>U{a}</span>
            ))}
          </div>
        )}

        {key === 'skill' && (
          <div>
            <h3>What's the competitive level?</h3>
            {SKILL_LEVELS.map((s) => (
              <div key={s.id} style={{ ...chip(answers.skill === s.id), display: 'block' }} onClick={() => setAnswers({ ...answers, skill: s.id })}>
                <strong>{s.name}</strong>
                <div style={{ fontSize: 12.5, marginTop: 4 }}>{s.tagline}</div>
              </div>
            ))}
          </div>
        )}

        {key === 'focus' && (
          <div>
            <h3>What do you want to work on? (up to {MAX_FOCUS})</h3>
            {FOCUS_OPTIONS.map((f) => (
              <span key={f.id} style={chip(answers.focus.includes(f.id))} onClick={() => toggleFocus(f.id)}>{f.name}</span>
            ))}
          </div>
        )}

        {key === 'identity' && (
          <div>
            <h3>Training identity</h3>
            {STYLE_OPTIONS.map((s) => (
              <div key={s.id} style={{ ...chip(answers.identity === s.id), display: 'block' }} onClick={() => setAnswers({ ...answers, identity: s.id })}>
                <strong>{s.name}</strong>
                <div style={{ fontSize: 12.5, marginTop: 4 }}>{s.tagline}</div>
              </div>
            ))}
          </div>
        )}

        {key === 'gameFormat' && (
          <div>
            <h3>What format does this team play?</h3>
            {GAME_FORMATS.map((g) => (
              <span key={g.id} style={chip(answers.gameFormat === g.id)} onClick={() => setAnswers({ ...answers, gameFormat: g.id })}>{g.name}</span>
            ))}
          </div>
        )}

        {key === 'duration' && (
          <div>
            <h3>How long is the session?</h3>
            {DURATIONS.map((d) => (
              <span key={d} style={chip(answers.duration === d)} onClick={() => setAnswers({ ...answers, duration: d })}>{d} min</span>
            ))}
          </div>
        )}

        {key === 'players' && (
          <div>
            <h3>How many players will be there?</h3>
            <button onClick={() => setAnswers({ ...answers, players: Math.max(6, answers.players - 1) })}>−</button>
            <span style={{ margin: '0 16px', fontSize: 20 }}>{answers.players}</span>
            <button onClick={() => setAnswers({ ...answers, players: answers.players + 1 })}>+</button>
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          {step > 0 && <button onClick={back} style={{ marginRight: 8 }}>Back</button>}
          <button onClick={next} disabled={!canAdvance()}>{step === STEPS.length - 1 ? 'Build the plan' : 'Next'}</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Today's practice plan — {answers.duration} min</h2>
        <div>
          <button onClick={regenerate} style={{ marginRight: 8 }}>Shuffle drills</button>
          <button onClick={startOver}>Start over</button>
        </div>
      </div>

      {plan.map((seg) => {
        const d = seg.drill
        const note = d.levelNotes && d.levelNotes[answers.skill]
        return (
          <div key={seg.key} style={{ border: '1px solid #ddd', borderRadius: 6, padding: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 11, background: '#eee', borderRadius: 3, padding: '2px 8px' }}>{CATEGORY_LABEL[seg.category]}</span>
                <h3 style={{ margin: '6px 0' }}>{d.name}</h3>
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#1F4D3A' }}>{seg.minutes} min</div>
            </div>
            <p>{d.summary}</p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: 13 }}>How to run it</p>
                <ol style={{ paddingLeft: 18, fontSize: 13.5 }}>
                  {d.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: 13 }}>Coaching points</p>
                <ul style={{ paddingLeft: 18, fontSize: 13.5 }}>
                  {d.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: 12.5, color: '#777' }}>Equipment: {d.equipment.join(', ')}</p>
            {note && <p style={{ fontSize: 12.5, background: '#f5f5f5', padding: 8, borderRadius: 4 }}><strong>For {answers.skill}:</strong> {note}</p>}
          </div>
        )
      })}
    </div>
  )
}
