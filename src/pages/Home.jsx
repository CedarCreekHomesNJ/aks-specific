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
    <div style={{ maxWidth: 560 }}>
      <div style={{ maxWidth: 480, margin: '60px auto 0', padding: '0 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h1>AKS Specific</h1>

        {links.length > 0 && (
          <div style={{ textAlign: 'left', margin: '32px 0' }}>
            <h3>Your teams and profiles</h3>
            {links.map((l) => (
              <div key={`${l.type}-${l.code}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', borderRadius: 6, padding: 10, marginBottom: 6 }}>
                <Link to={l.type === 'team' ? `/t/${l.code}` : `/p/${l.code}`} style={{ textDecoration: 'none', color: '#1F4D3A' }}>
                  <span style={{ fontSize: 11, background: '#eee', borderRadius: 3, padding: '2px 6px', marginRight: 8 }}>
                    {l.type === 'team' ? 'Team' : 'Profile'}
                  </span>
                  {l.label}
                </Link>
                <button onClick={() => forget(l.type, l.code)} style={{ fontSize: 12, color: '#999' }}>Forget</button>
              </div>
            ))}
          </div>
        )}

        <p>Create a new team to get your private, saved coaching dashboard.</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={createTeam} disabled={creating} style={{ padding: '12px 24px', fontSize: 16 }}>
          {creating ? 'Creating…' : 'Create a new team'}
        </button>

        <p style={{ marginTop: 40, color: '#777', fontSize: 13.5 }}>
          Coaching more than one team? Create a profile to keep them all in one saved place.
        </p>
        <button onClick={createProfile} disabled={creatingProfile} style={{ padding: '10px 18px' }}>
          {creatingProfile ? 'Creating…' : 'Create a coach profile'}
        </button>
      </div>
    </div>
  )
}
