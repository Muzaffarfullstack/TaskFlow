import './App.css'
import Header from './components/header/Header'
import Card from './components/cards/Card'
import CreateUser from './components/createUser/CreateUser'
import SearchTask from './components/searchTask/SearchTask'
import TaskBar from './components/taskBar/TaskBar'
import Footer from './components/footer/Footer'
import TaskList from './components/taskList/TaskList'
import ArchivedTasks from './components/archivedTasks/ArchivedTasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])
    const [showArchivedTasks, setShowArchivedTasks] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const handleDelete = (id) =>{
        const taskToArchive = tasks.find(t => t.id === id)
        setTasks((info) =>{
            return info.filter((task) => {
                return task.id !== id
            })
        })
        setArchivedTasks([...archivedTasks, taskToArchive])
    }

    const toggleShowArchived = () => {
        setShowArchivedTasks(prev => !prev)
    }
    return (
        <div className='container'>
            <Header/>
            <main>
                <Card/>
                <CreateUser onAdd={handleTask}/>
                <SearchTask 
                 onToggleArchive={toggleShowArchived}
                 showArchived={showArchivedTasks}
                 onSearchChange={setSearchTerm}
                 />
                <TaskBar tasks={tasks}/>
                {tasks.length > 0 && <TaskList tasks={tasks} onDelete={handleDelete} searchTerm={searchTerm}/>}
                {showArchivedTasks && archivedTasks.length > 0 && (
                    <ArchivedTasks archivedTasks={archivedTasks}/>)}
            </main>
            <hr />
            <Footer/>
        </div>
    )
}

export default App
