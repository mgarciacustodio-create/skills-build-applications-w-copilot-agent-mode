import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { API_BASE_URL } from './api.js'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const navigation = [
  { to: '/activities', label: 'Activities', number: '01' },
  { to: '/leaderboard', label: 'Leaderboard', number: '02' },
  { to: '/teams', label: 'Teams', number: '03' },
  { to: '/users', label: 'Athletes', number: '04' },
  { to: '/workouts', label: 'Workouts', number: '05' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/activities" aria-label="Octofit home">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>octofit<span className="brand-period">.</span></span>
        </NavLink>
        <div className="topbar-meta">
          <span className="live-indicator" aria-hidden="true" />
          <span>Movement, measured</span>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label="Main navigation">
          <p className="sidebar-label">Your tracker</p>
          <nav className="nav-list">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                key={item.to}
                to={item.to}
              >
                <span className="nav-number">{item.number}</span>
                <span>{item.label}</span>
                <span className="nav-arrow" aria-hidden="true">↗</span>
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <span className="sidebar-label">API endpoint</span>
            <a href={API_BASE_URL} target="_blank" rel="noreferrer">{API_BASE_URL}</a>
          </div>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/activities" />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate replace to="/activities" />} />
          </Routes>
          <footer className="page-footer">
            <span>OCTOFIT TRACKER</span>
            <span>Build consistency. Celebrate progress.</span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
