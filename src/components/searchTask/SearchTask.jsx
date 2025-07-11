import './SearchTask.css'

function SearchTask({onToggleArchive, showArchived, onSearchChange}) {
  return (
    <div className='search-container'>
        <form className='search-form'>
            <input type="text" placeholder="Search tasks and categories..." onChange={(e) => onSearchChange(e.target.value)}/>
            <select className='first-select'>
                <option value="allProperties">All Properties</option>
                <option value="lowPriority">Low Priority</option>
                <option value="mediumPriority">Medium Priority</option>
                <option value="highPriority">High Priority</option>
            </select>
             <select className='second-select'>
                <option value="allTasks">All Tasks</option>
                <option value="lowPriority">Personal</option>
                <option value="mediumPriority">Work</option>
                <option value="highPriority">Health</option>
                <option value="lowPriority">Learning</option>
                <option value="lowPriority">Shopping</option>
                <option value="lowPriority">Finance</option>
                <option value="lowPriority">Travel</option>
                <option value="lowPriority">Other</option>
            </select>
            <button type='button' onClick={onToggleArchive}>
              <i className="fa-solid fa-box-archive"></i>
             {showArchived ? "Hide archive" : "Show Archived"}
            </button>
        </form>
    </div>
  )
}

export default SearchTask