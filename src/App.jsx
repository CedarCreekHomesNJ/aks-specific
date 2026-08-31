import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TeamDashboard from './pages/TeamDashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/t/:code" element={<TeamDashboard />} />
    </Routes>
  )
}
