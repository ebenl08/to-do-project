import Task from "./Task"
import type { TaskInterface } from "../lib/type/TaskInterface"

const TaskList = ({
  data,
  onEditTask,
  onDeleteTask
}: {
  data: TaskInterface[] | null,
  onEditTask: (id:number, desc:string, isDone: boolean) => void,
  onDeleteTask: (id:number) => void
}) => {
  try{
    return(
      <div className="w-full">
        {data? data.map((obj, key) =>(
          <Task key={key} 
            id={obj.id} 
            desc={obj.desc}
            isDone={obj.isDone}
            onEditTask={onEditTask} 
            onDeleteTask={onDeleteTask}
          />
        )) :
          ''
        }
      </div>
    )
  } catch(err){
    console.error(err)
  }
}

export default TaskList;