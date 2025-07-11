import './ArchivedTasks.css'


function ArchivedTasks({archivedTasks}) {
  return (
    <div className='archived-tasks'>
        <h2>Archived Tasks</h2>
        {archivedTasks.map(task => (
            <div className="archived-task" key={task.id}>
                <p>{task.title}</p>
                <span className={`badge ${task.priority.replace(/\s+/g, '-').toLowerCase()}`}>{task.priority}</span>
                <span className={`badge ${task.category.replace(/\s+/g, '-').toLowerCase()}`}>{task.category}</span>
            </div>
        ))}
    </div>
  )
}

export default ArchivedTasks