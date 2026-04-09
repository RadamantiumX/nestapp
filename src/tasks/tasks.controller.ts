import { Controller, Get, Post, Put, Delete, Patch } from "@nestjs/common";
import { TaskService } from "./task.service";

// Decorator
@Controller('/tasks') // Main URL ENDPOINT
export class TaskController{
    // Now we can use the methods
    tasksService:TaskService; // Long way to create a constructor
    constructor(tasksService:TaskService){
          this.tasksService = tasksService
    }

    // Methods 
    @Get() // Decorator --> Need endpoint URL
    getAllTasks(){
       return this.tasksService.getTasks()
    }

    //  @Get('/') // Decorator --> Need endpoint URL
    // index(){
    //    return 'Homepage'
    // }

    @Post()
    createTask(){
        return this.tasksService.createTask()
    }

    @Put() // Comple update
    updateTask(){
        return this.tasksService.updateTask()
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask()
    }

    @Patch() // Partitional update
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()
    }

}