import TaskList from './_component/TaskList'
import TaskCreator from './_component/TaskCreator'
import './App.css'

import type { TaskInterface } from './lib/type/TaskInterface'
import { useEffect, useState } from 'react'
import { getTask, createTask, editTask, deleteTask } from './lib/action/crud'

function App() {

  //SETUP DEFAULT PLACEHOLDER DATA
  // const dummy: TaskInterface[] = [
  //     {
  //       id: 1,
  //       desc: "Play Mahjong",
  //       isDone: false
  //     },{
  //       id: 2,
  //       desc: "Zoom Meeting",
  //       isDone: true
  //     }
  // ]

  // useEffect(()=>{
  //   localStorage.setItem('taskList', JSON.stringify(dummy))
  // }, [])

  //HANDLE CRUD USESTATES
  const [_, setTasks] = useState<TaskInterface[]>([])

  const handleCreateTask = (desc: string) => {
    const newTasks = createTask(desc)
    setTasks(newTasks)
  }
  const handleEditTask = (id: number, desc: string, isDone:boolean) => {
    const newTasks = editTask(id, desc, isDone)
    setTasks(newTasks)
  }
  const handleDeleteTask = (id: number) => {
    const newTasks = deleteTask(id)
    setTasks(newTasks)
  }

  //DISPLAY RETURN
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[50vw] justify-center">
        <div className="rounded-full bg-[#031e42] p-3 m-3">
          <TaskCreator 
            onAddTask={handleCreateTask}
          />
        </div>
        <div className='rounded-4xl bg-[#031e42] p-3 m-3'>
          <TaskList 
            data={getTask()} 
            onEditTask={handleEditTask} 
            onDeleteTask={handleDeleteTask} 
          />
        </div>
      </div>
    </div>
  )
}

export default App
