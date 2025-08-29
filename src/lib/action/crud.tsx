import type { TaskInterface } from "../type/TaskInterface";

export const createTask = (task: string) => {
  const data = getTask()
  data.push({
    id: data.length > 0 ? data[data.length - 1].id + 1 : 1, 
    desc: task,
    isDone: false
  })
  localStorage.setItem('taskList', JSON.stringify(data))
  return data
}

export const editTask = (id: number, desc: string, isDone: boolean) => {
  const data = getTask()
  const datum = data.find((datum) => datum.id === id)
  if(datum){
    datum.desc = desc
    datum.isDone = isDone
    localStorage.setItem('taskList', JSON.stringify(data))
  }
  else{
    console.log(`Item with ID ${id} is not found\n Current tasks list: ${data}`)
  }
  return data
}

export const deleteTask = (id: number) => {
  const data = getTask()
  const datum = data.find((datum) => datum.id === id)

  if (datum){
    for(let i = 0; i < data.length; i++){
      if(data[i].id === id) data.splice(i, 1)
    }
    localStorage.setItem('taskList', JSON.stringify(data))
  }else{
    console.log(`Item with ID ${id} is not found\n Current tasks list: ${data}`)
  }

  return data
}

export const getTask = (): TaskInterface[] => {
  const taskListStr = localStorage.getItem('taskList');
  const data: TaskInterface[] = taskListStr? JSON.parse(taskListStr) : []
  return data
}


