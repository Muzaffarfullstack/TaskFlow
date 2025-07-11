import './TaskList.css'

function TaskList({ tasks, onDelete, searchTerm }) {
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='task-list'>
      {filteredTasks.map((task) => (
        <div className="task-item" key={task.id}>
          <p className="task-title">{task.title}</p>
          <span className={`badge priority ${task.priority.replace(/\s+/g, '-').toLowerCase()}`}>
            {task.priority}
          </span>
          <span className={`badge category ${task.category.replace(/\s+/g, '-').toLowerCase()}`}>
            {task.category}
          </span>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}


export default TaskList
