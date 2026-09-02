import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function goAfterLogin() {
    const pending = sessionStorage.getItem('pendingTeamCode')
    if (pending) {
      sessionStorage.removeItem('pendingTeamCode')
      navigate(`/t/${pending}`)
    } else {
      navigate('/')
    }
  }

  async function handleSignUp() {
    setError('')
    if (!email.trim() || !password) { setError('Enter an email and password.'); return }
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({ email: email.trim(), password })
    if (error) {
      setLoading(false)
      setError(error.message)
      return
    }
    if (data.user) {
      await supabase.from('accounts').insert({ id: data.user.id, email: email.trim(), name: name.trim() || null })
    }
    setLoading(false)
    goAfterLogin()
  }

  async function handleSignIn() {
    setError('')
    if (!email.trim() || !password) { setError('Enter an email and password.'); return }
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    goAfterLogin()
  }

  return (
    <div>
      <div className="app-bar">
        <div className="logo-mark">A</div>
        <div className="brand">AKS Specific</div>
      </div>
      <div className="page" style={{ maxWidth: 420 }}>
        <div className="card">
          <div className="tabbar" style={{ marginBottom: 20 }}>
            <button className={`tab ${mode === 'signin' ? 'tab-active' : ''}`} onClick={() => setMode('signin')}>Sign in</button>
            <button className={`tab ${mode === 'signup' ? 'tab-active' : ''}`} onClick={() => setMode('signup')}>Create account</button>
          </div>

          {mode === 'signup' && (
            <div style={{ marginBottom: 14 }}>
              <label className="field-label">Your name</label>
              <input className="field" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <label className="field-label">Email</label>
            <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label className="field-label">Password</label>
            <input className="field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {error && <p style={{ color: '#D92D20', fontSize: 13 }}>{error}</p>}

          {mode === 'signin' ? (
            <button onClick={handleSignIn} disabled={loading} className="btn btn-primary" style={{ width: '100%' }}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          ) : (
            <button onClick={handleSignUp} disabled={loading} className="btn btn-primary" style={{ width: '100%' }}>
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
