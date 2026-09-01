import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { saveLink } from '../lib/localLinks'
import TeamProfileTab from '../components/TeamProfileTab'
import RosterTab from '../components/RosterTab'
import PracticePlanTab from '../components/PracticePlanTab'
import FormationAssistantTab from '../components/FormationAssistantTab'

const TABS = [
  { id: 'profile', label: 'Team profile' },
  { id: 'plans', label: 'Practice plans' },
  { id: 'roster', label: 'Team roster' },
  { id: 'formation', label: 'Formation assistant' }
]

export default function TeamDashboard() {
  const { code } = useParams()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('profile')

  useEffect(() => {
    let cancelled = false
    async function load() {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('access_code', code)
        .single()
      if (cancelled) return
      if (error) {
        setError('No team found for this link.')
      } else {
        setTeam(data)
        saveLink({ type: 'team', code: data.access_code, label: data.team_name })
      }
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [code])

  function handleTeamUpdate(updated) {
    setTeam(updated)
    saveLink({ type: 'team', code: updated.access_code, label: updated.team_name })
  }

  if (loading) return <p style={{ padding: 40 }}>Loading team…</p>
  if (error) return <p style={{ padding: 40, color: 'red' }}>{error}</p>

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto', padding: '20px' }}>
      <Link to="/" style={{ fontSize: 13, color: '#1F4D3A' }}>← Back to my teams</Link>

      <h1 style={{ marginBottom: 4, marginTop: 8 }}>{team.team_name}</h1>
      <p style={{ color: '#777', marginTop: 0, fontSize: 13 }}>
        Bookmark this page — access code: <strong>{team.access_code}</strong>
      </p>

      <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid #ddd', marginBottom: 24 }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: '10px 16px',
              border: 'none',
              background: 'none',
              borderBottom: activeTab === t.id ? '2px solid #1F4D3A' : '2px solid transparent',
              fontWeight: activeTab === t.id ? 600 : 400,
              cursor: 'pointer'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'profile' && <TeamProfileTab team={team} onTeamUpdate={handleTeamUpdate} />}
      {activeTab === 'plans' && <PracticePlanTab team={team} />}
      {activeTab === 'roster' && <RosterTab team={team} />}
      {activeTab === 'formation' && <FormationAssistantTab team={team} />}
    </div>
  )
}
