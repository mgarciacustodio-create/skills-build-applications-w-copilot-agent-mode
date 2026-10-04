import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'userId', label: 'Athlete ID' },
  { key: 'minutes', label: 'Duration', render: (activity) => `${activity.minutes} min` },
  { key: 'calories', label: 'Calories', render: (activity) => `${activity.calories} kcal` },
]

function Activities() {
  return (
    <ResourceList
      columns={columns}
      description="Every effort adds up. Review the latest movement logged by your community."
      apiPath="/api/activities/"
      title="Activities"
    />
  )
}

export default Activities