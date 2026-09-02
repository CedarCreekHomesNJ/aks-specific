import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { saveLink } from '../lib/localLinks'
import { useAuth } from '../lib/AuthContext'
import TeamProfileTab from '../components/TeamProfileTab'
import RosterTab from '../components/RosterTab'
import PracticePlanTab from '../components/PracticePlanTab'
import FormationAssistantTab from '../components/FormationAssistantTab'
import ScheduleTab from '../components/ScheduleTab'

const TABS = [
  { id: 'profile', label: 'Team profile' },
  { id: 'plans', label: 'Practice plans' },
  { id: 'roster', label: 'Team roster' },
  { id: 'formation', label: 'Formation assistant' },
  { id: 'schedule', label: 'Schedule' }
]

export default function TeamDashboard() {
  const { code } = useParams()
  const { user, loading: authLoading } = useAuth()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    if (authLoading) return
    let cancelled = false

    async function load() {
      if (!user) {
        sessionStorage.setItem('pendingTeamCode', code)
        if (!cancelled) {
          setError('LOGIN_REQUIRED')
          setLoading(false)
        }
        return
      }

      let { data, error } = await supabase.from('teams').select('*').eq('access_code', code).single()

      if (error || !data) {
        const { data: joinedId } = await supabase.rpc('join_team_by_code', { code })
        if (joinedId) {
          const retry = await supabase.from('teams').select('*').eq('access_code', code).single()
          data = retry.data
          error = retry.error
        }
      }

      if (cancelled) return
      if (error || !data) {
        setError('No team found for this link.')
      } else {
        setTeam(data)
        saveLink({ type: 'team', code: data.access_code, label: data.team_name })
      }
      setLoading(false)
    }

    load()
    return () => { cancelled = true }
  }, [code, user, authLoading])

  function handleTeamUpdate(updated) {
    setTeam(updated)
    saveLink({ type: 'team', code: updated.access_code, label: updated.team_name })
  }

  if (authLoading || loading) return <p style={{ padding: 40 }}>Loading team…</p>

  if (error === 'LOGIN_REQUIRED') {
    return (
      <div className="page" style={{ maxWidth: 420, margin: '60px auto' }}>
        <div className="card" style={{ textAlign: 'center', padding: 28 }}>
          <h2>Sign in to continue</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 16 }}>This team's page requires an account — you'll land right back here after signing in.</p>
          <Link to="/login"><button className="btn btn-primary">Sign in / Create account</button></Link>
        </div>
      </div>
    )
  }

  if (error) return <p style={{ padding: 40, color: '#D92D20' }}>{error}</p>

  return (
    <div>
      <div className="app-bar" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="logo-mark">A</div>
          <div className="brand">{team.team_name}</div>
        </div>
        <span className="badge badge-dark">{team.access_code}</span>
      </div>

      <div className="page">
        <Link to="/" style={{ fontSize: 13, color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>← Back to my teams</Link>

        <div className="tabbar" style={{ marginTop: 16 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`tab ${activeTab === t.id ? 'tab-active' : ''}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && <TeamProfileTab team={team} onTeamUpdate={handleTeamUpdate} />}
        {activeTab === 'plans' && <PracticePlanTab team={team} />}
        {activeTab === 'roster' && <RosterTab team={team} />}
        {activeTab === 'formation' && <FormationAssistantTab team={team} />}
        {activeTab === 'schedule' && <ScheduleTab team={team} />}
      </div>
    </div>
  )
}
