import './CreateUser.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function CreateUser({onAdd}) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Low Priority')
  const [category, setCategory] = useState('Personal')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title.trim() === '') return

    const newTask = {
      id: uuidv4(),
      title,
      priority,
      category
    }
    onAdd(newTask)
    setTitle('')
    setPriority('')
    setCategory('')
  }

  return (
    <div className='create-container'>
        <h1><span>+</span>Create New Task</h1>
        <form className='user-form' onSubmit={handleSubmit}>
            <input type="text" required placeholder="What need's to be accomplished today ?" value={title} onChange={(e) => 
              setTitle(e.target.value)}/>
            <select className='first-select' required value={priority} onChange={(e) => {setPriority(e.target.value)}}>
                <option value="Low Priority">Low Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="High Priority">High Priority</option>
            </select>
             <select className='second-select' required value={category} onChange={(e) => {setCategory(e.target.value)}}>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Health">Health</option>
                <option value="Learning">Learning</option>
                <option value="Shopping">Shopping</option>
                <option value="Finance">Finance</option>
                <option value="Travel">Travel</option>
                <option value="Other">Other</option>
            </select>
            <button>+ Add Task</button>
        </form>
    </div>
  )
}

export default CreateUser