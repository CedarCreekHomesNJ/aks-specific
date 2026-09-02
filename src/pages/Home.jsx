import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../lib/AuthContext'

function generateCode() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789'
  let code = ''
  for (let i = 0; i < 8; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export default function Home() {
  const { user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [teams, setTeams] = useState([])
  const [teamsLoading, setTeamsLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [joining, setJoining] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) loadTeams()
    else setTeamsLoading(false)
  }, [user])

  async function loadTeams() {
    setTeamsLoading(true)
    const { data, error } = await supabase.from('teams').select('*').order('created_at', { ascending: false })
    if (!error) setTeams(data)
    setTeamsLoading(false)
  }

  async function createTeam() {
    setCreating(true)
    setError('')
    const code = generateCode()
    const { error } = await supabase.from('teams').insert({ access_code: code, team_name: 'New team', owner_id: user.id })
    if (error) {
      setError('Could not create a team right now. Try again.')
      setCreating(false)
      return
    }
    navigate(`/t/${code}`)
  }

  async function joinTeam() {
    if (!joinCode.trim()) return
    setJoining(true)
    setError('')
    const { data, error } = await supabase.rpc('join_team_by_code', { code: joinCode.trim() })
    setJoining(false)
    if (error || !data) {
      setError('No team found with that code.')
      return
    }
    navigate(`/t/${joinCode.trim()}`)
  }

  async function signOut() {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (authLoading) return <p style={{ padding: 40 }}>Loading…</p>

  return (
    <div>
      <div className="app-bar" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="logo-mark">A</div>
          <div className="brand">AKS Specific</div>
        </div>
        {user && (
          <button onClick={signOut} className="btn btn-outline btn-sm" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
            Sign out
          </button>
        )}
      </div>

      <div className="page" style={{ maxWidth: 480 }}>
        {!user ? (
          <div className="card" style={{ textAlign: 'center', padding: 28 }}>
            <h2>Welcome</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 16 }}>Sign in or create an account to manage your teams.</p>
            <Link to="/login"><button className="btn btn-primary">Sign in / Create account</button></Link>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: 26 }}>Your teams</h1>
            {teamsLoading ? (
              <p style={{ color: 'var(--ink-soft)' }}>Loading…</p>
            ) : teams.length === 0 ? (
              <p style={{ color: 'var(--ink-soft)', marginBottom: 20 }}>No teams yet — create one below.</p>
            ) : (
              <div style={{ marginBottom: 24 }}>
                {teams.map((t) => (
                  <Link key={t.id} to={`/t/${t.access_code}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ padding: 14, marginBottom: 8 }}>
                      <strong style={{ color: 'var(--ink)' }}>{t.team_name}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {error && <p style={{ color: '#D92D20' }}>{error}</p>}

            <div className="card" style={{ marginBottom: 16, textAlign: 'center', padding: 24 }}>
              <button onClick={createTeam} disabled={creating} className="btn btn-primary">
                {creating ? 'Creating…' : '+ Create a new team'}
              </button>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 10 }}>Join a team with a code</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <input className="field" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} placeholder="Team access code" style={{ flex: 1 }} />
                <button onClick={joinTeam} disabled={joining} className="btn btn-outline">{joining ? 'Joining…' : 'Join'}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
