import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

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
  const [error, setError] = useState('')

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
    navigate(`/t/${code}`)
  }

  return (
    <div style={{ maxWidth: 480, margin: '80px auto', padding: '0 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>AKS Specific</h1>
      <p>Create a new team to get your private, saved coaching dashboard.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={createTeam} disabled={creating} style={{ padding: '12px 24px', fontSize: 16 }}>
        {creating ? 'Creating…' : 'Create a new team'}
      </button>
    </div>
  )
}
