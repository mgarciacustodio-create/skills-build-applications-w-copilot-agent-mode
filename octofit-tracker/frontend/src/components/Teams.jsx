import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'points', label: 'Points', render: (team) => `${team.points} pts` },
]

function Teams() {
  return (
    <ResourceList
      columns={columns}
      description="Find your people, build a rhythm, and move a little further together."
      endpoint="teams"
      title="Teams"
    />
  )
}

export default Teams