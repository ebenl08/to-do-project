import { useState } from "react"
import Button from "./buttons/Button"

const TaskCreator = ({
  className,
  onAddTask,
}:{
  className?: string,
  onAddTask: (task: string) => void
}) => {

  const [task, setTask] = useState('')

  return(
    <div className={`${className} flex flex-row`}>
      <input 
        className="rounded-full w-full bg-white border-1 mx-2 p-2 px-4"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task here"
        id="task"
        name="task"
      />
      <Button className="bg-blue-400 hover:bg-blue-500 text-white" onClick={(_) => {
        if(task) onAddTask(task)
      }}>
        Add
      </Button>
    </div>
  )
}

export default TaskCreator

