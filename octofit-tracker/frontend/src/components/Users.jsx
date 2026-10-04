import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'name', label: 'Athlete' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
]

function Users() {
  return (
    <ResourceList
      columns={columns}
      description="Meet the athletes showing up, putting in the work, and getting stronger."
      apiPath="/api/users/"
      title="Athletes"
    />
  )
}

export default Users