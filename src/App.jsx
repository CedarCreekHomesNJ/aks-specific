import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamDashboard from './pages/TeamDashboard'
import CoachProfile from './pages/CoachProfile'
import Login from './pages/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/t/:code" element={<TeamDashboard />} />
      <Route path="/p/:code" element={<CoachProfile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
