import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { getLinks, saveLink, removeLink } from '../lib/localLinks'

function generateCode() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export default function Home() {
  const navigate = useNavigate()
  const [creating, setCreating] = useState(false)
  const [creatingProfile, setCreatingProfile] = useState(false)
  const [error, setError] = useState('')
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(getLinks())
  }, [])

  const createTeam = async () => {
    setCreating(true)
    setError('')
    const code = generateCode()
    const { error } = await supabase.from('teams').insert({
      access_code: code,
      team_name: 'New team'
    })
    if (error) {
      setError('Could not create a team right now. Try again.')
      setCreating(false)
      return
    }
    saveLink({ type: 'team', code, label: 'New team' })
    navigate(`/t/${code}`)
  }

  const createProfile = async () => {
    setCreatingProfile(true)
    setError('')
    const code = generateCode()
    const { error } = await supabase.from('coach_profiles').insert({
      access_code: code
    })
    if (error) {
      setError('Could not create a profile right now. Try again.')
      setCreatingProfile(false)
      return
    }
    saveLink({ type: 'profile', code, label: 'My teams' })
    navigate(`/p/${code}`)
  }

  const forget = (type, code) => {
    removeLink(type, code)
    setLinks(getLinks())
  }

  return (
    <div>
      <div className="app-bar">
        <div className="logo-mark">A</div>
        <div className="brand">AKS Specific</div>
      </div>

      <div className="page" style={{ maxWidth: 640 }}>
        <h1 style={{ fontSize: 30 }}>Coaching, organized.</h1>
        <p style={{ color: 'var(--ink-soft)', fontSize: 15, marginBottom: 28 }}>
          Build practice plans, manage your roster, and dial in a formation — all saved to your team's private link.
        </p>

        {links.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <p className="section-title">Your teams and profiles</p>
            {links.map((l) => (
              <div key={`${l.type}-${l.code}`} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, marginBottom: 8 }}>
                <Link to={l.type === 'team' ? `/t/${l.code}` : `/p/${l.code}`} style={{ textDecoration: 'none', color: 'var(--ink)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className={l.type === 'team' ? 'badge' : 'badge badge-orange'}>{l.type === 'team' ? 'Team' : 'Profile'}</span>
                  {l.label}
                </Link>
                <button onClick={() => forget(l.type, l.code)} className="btn btn-outline btn-sm">Forget</button>
              </div>
            ))}
          </div>
        )}

        {error && <p style={{ color: '#D92D20' }}>{error}</p>}

        <div className="card" style={{ marginBottom: 16, textAlign: 'center', padding: 28 }}>
          <p style={{ fontWeight: 700, marginBottom: 14 }}>Start a new team</p>
          <button onClick={createTeam} disabled={creating} className="btn btn-primary">
            {creating ? 'Creating…' : 'Create a new team'}
          </button>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: 22 }}>
          <p style={{ color: 'var(--ink-soft)', fontSize: 13.5, marginBottom: 12 }}>
            Coaching more than one team? Create a profile to keep them all in one saved place.
          </p>
          <button onClick={createProfile} disabled={creatingProfile} className="btn btn-outline">
            {creatingProfile ? 'Creating…' : 'Create a coach profile'}
          </button>
        </div>
      </div>
    </div>
  )
}
