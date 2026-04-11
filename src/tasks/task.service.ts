import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import type { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    name: string;
    age: number
}

// Reusable methods file
// Inject code in all source projects app
// DB QUERYS METHODS/FN
@Injectable()
export class TaskService{
    private tasks:any = []

    getTasks(){
        return this.tasks
    }

    getTask(id:number){
      const taskFound =  this.tasks.find(task => task.id === id)
      
      if(!taskFound) {
        return new NotFoundException(`The task id: ${id} was not founded`)
    }

      return taskFound
    }

    createTask(task: CreateTaskDto){
        console.log(`From the Service`, task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

    updateTask(task:UpdateTaskDto){
        return 'actualizando tareas'
    }

    deleteTask(){
        return 'eliminando tareas'
    }

    updateTaskStatus(){
        return 'actualizando el estado de una tareas'
    }
}