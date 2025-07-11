import './TaskBar.css'


function TaskBar({tasks}) {
  return (
    <div className='task-component'>
        {tasks.length === 0 && <div className="task-info">
            <i className="fa-regular fa-flag"></i>
            <h2>No tasks found</h2>
            <p>Ready to be product  ive ? Add your first task above to <br /> get started!</p>
        </div>}
    </div>
  )
}

export default TaskBar