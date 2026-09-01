import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { saveLink } from '../lib/localLinks'

function generateCode() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export default function CoachProfile() {
  const { code } = useParams()
  const [profile, setProfile] = useState(null)
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [linkCode, setLinkCode] = useState('')
  const [linkError, setLinkError] = useState('')
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    load()
  }, [code])

  async function load() {
    setLoading(true)
    const { data: profileData, error: profileError } = await supabase
      .from('coach_profiles')
      .select('*')
      .eq('access_code', code)
      .single()
    if (profileError) {
      setError('No coach profile found for this link.')
      setLoading(false)
      return
    }
    setProfile(profileData)
    saveLink({ type: 'profile', code: profileData.access_code, label: profileData.name || 'My teams' })

    const { data: links, error: linksError } = await supabase
      .from('coach_profile_teams')
      .select('id, teams(*)')
      .eq('profile_id', profileData.id)
      .order('created_at', { ascending: true })

    if (!linksError) {
      setTeams(links.map((l) => l.teams).filter(Boolean))
    }
    setLoading(false)
  }

  async function createTeam() {
    setCreating(true)
    const teamCode = generateCode()
    const { data: newTeam, error: teamError } = await supabase
      .from('teams')
      .insert({ access_code: teamCode, team_name: 'New team' })
      .select()
      .single()
    if (teamError) {
      setCreating(false)
      return
    }
    await supabase.from('coach_profile_teams').insert({
      profile_id: profile.id,
      team_id: newTeam.id
    })
    saveLink({ type: 'team', code: newTeam.access_code, label: newTeam.team_name })
    setCreating(false)
    load()
  }

  async function linkTeam() {
    if (!linkCode.trim()) return
    setLinkError('')
    const { data: found, error: findError } = await supabase
      .from('teams')
      .select('*')
      .eq('access_code', linkCode.trim())
      .single()
    if (findError || !found) {
      setLinkError('No team found with that code.')
      return
    }
    if (teams.some((t) => t.id === found.id)) {
      setLinkError('That team is already linked to this profile.')
      return
    }
    await supabase.from('coach_profile_teams').insert({
      profile_id: profile.id,
      team_id: found.id
    })
    saveLink({ type: 'team', code: found.access_code, label: found.team_name })
    setLinkCode('')
    load()
  }

  async function deleteTeam(team) {
    const confirmed = window.confirm(
      `Permanently delete "${team.team_name}"? This removes its roster, formations, and profile too. This cannot be undone.`
    )
    if (!confirmed) return
    await supabase.from('teams').delete().eq('id', team.id)
    load()
  }

  if (loading) return <p style={{ padding: 40 }}>Loading profile…</p>
  if (error) return <p style={{ padding: 40, color: 'red' }}>{error}</p>

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto', padding: 20 }}>
      <Link to="/" style={{ fontSize: 13, color: '#1F4D3A' }}>← Back to my teams</Link>

      <h1 style={{ marginTop: 8 }}>{profile.name || 'My teams'}</h1>
      <p style={{ color: '#777', fontSize: 13 }}>
        Bookmark this page — profile access code: <strong>{profile.access_code}</strong>
      </p>

      <h3 style={{ marginTop: 32 }}>Your teams</h3>
      {teams.length === 0 ? (
        <p style={{ color: '#777' }}>No teams linked yet — create a new one or link an existing team below.</p>
      ) : (
        <div>
          {teams.map((t) => (
            <div key={t.id} style={{ border: '1px solid #ddd', borderRadius: 6, padding: 14, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{t.team_name}</strong>
                {t.age_group && <span style={{ color: '#777', fontSize: 13 }}> — {t.age_group}</span>}
                {t.location && <div style={{ fontSize: 12.5, color: '#999' }}>{t.location}</div>}
              </div>
              <div>
                <Link to={`/t/${t.access_code}`}>
                  <button style={{ marginRight: 8 }}>Open dashboard</button>
                </Link>
                <button onClick={() => deleteTeam(t)} style={{ color: '#A32D2D' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 32, borderTop: '1px solid #eee', paddingTop: 20 }}>
        <button onClick={createTeam} disabled={creating} style={{ padding: '10px 18px', marginRight: 24 }}>
          {creating ? 'Creating…' : '+ Create a new team'}
        </button>

        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 600 }}>Already have a team's link? Attach it to this profile:</p>
          <input
            value={linkCode}
            onChange={(e) => setLinkCode(e.target.value)}
            placeholder="Team access code"
            style={{ padding: 8, marginRight: 8 }}
          />
          <button onClick={linkTeam}>Link team</button>
          {linkError && <p style={{ color: 'red', fontSize: 13 }}>{linkError}</p>}
        </div>
      </div>
    </div>
  )
}
