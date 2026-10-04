import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  {
    key: 'difficulty',
    label: 'Difficulty',
    render: (workout) => <span className="difficulty-label">{workout.difficulty}</span>,
  },
  { key: 'duration', label: 'Duration', render: (workout) => `${workout.duration} min` },
]

function Workouts() {
  return (
    <ResourceList
      columns={columns}
      description="A good plan meets you where you are. Pick a session and get moving."
      endpoint="workouts"
      title="Workouts"
    />
  )
}

export default Workouts