import ResourceList from './ResourceList.jsx'

const columns = [
  {
    key: 'rank',
    label: 'Rank',
    render: (entry) => <span className="rank-value">{String(entry.rank).padStart(2, '0')}</span>,
  },
  { key: 'name', label: 'Athlete' },
  { key: 'score', label: 'Score', render: (entry) => `${entry.score} pts` },
]

function Leaderboard() {
  return (
    <ResourceList
      columns={columns}
      description="Small wins, added together. See who is setting the pace this week."
      endpoint="leaderboard"
      title="Leaderboard"
    />
  )
}

export default Leaderboard