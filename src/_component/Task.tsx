import { useState } from "react";
import type { TaskInterface } from "../lib/type/TaskInterface";
import Button from "./buttons/Button";

interface TaskEditorInterface{
  onEditTask: (id:number, desc:string, isDone:boolean) => void,
  onDeleteTask: (id:number) => void
}

const Task = ({
    id,
    desc,
    isDone,
    onEditTask,
    onDeleteTask,
  }: TaskInterface & TaskEditorInterface
) => {
  const [taskDone, setTaskDone] = useState(isDone)
  const [editStatus, setEditStatus] = useState(false)
  const [taskDesc, setTaskDesc] = useState(desc)

  const editOnClick = (id?: number, desc?: string) => {
    if(editStatus && desc){
      setEditStatus(false)
      onEditTask(id as number, desc as string, taskDone as boolean)
    }
    else{
      setEditStatus(true)
    }
  }

  const handleCheckedTask = (evt:any) => {
    setTaskDone(evt.target.checked)
    onEditTask(id, taskDesc, evt.target.checked)
    console.log(evt.target.checked)
  }

  return(
    <div className="flex flex-row rounded-full justify-center content-center border-2 p-2 m-2 bg-white">
      <div className="flex flex-row justify-center w-[2.5rem] h-[2.5rem] bg-gray-100 rounded-full p-2 mx-2">
        <input
          type="checkbox"
          checked={taskDone}
          onChange={handleCheckedTask}
        />
      </div>
      {<div className="basis-[80%] mx-2">
          <section>
            {editStatus? 
              <input 
                className="rounded-full w-full border-1 p-2 px-4"
                type="text"
                value={taskDesc}
                onChange={(evt) => setTaskDesc(evt.target.value)}
              />
              : 
              <div className="w-full p-2 text-nowrap">
                {taskDone? <s>{desc}</s> : desc}
              </div>
            }
          </section>
        </div>}

      <Button 
        className="bg-green-400 hover:bg-green-500 max-h-[3rem] text-white mx-2" 
        onClick={() => editOnClick(id, taskDesc)}>
          {editStatus? "Enter": "Edit"}
      </Button>

      <Button className="bg-red-400 hover:bg-red-500 max-h-[3rem] text-white mx-2"
        onClick={() => onDeleteTask(id)}>
          Delete
      </Button>
    </div>
  )
}

export default Task;