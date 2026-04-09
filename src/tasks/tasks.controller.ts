import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

// Decorator
@Controller({})
export class TaskController{
    // Now we can use the methods
    tasksService:TaskService;
    constructor(tasksService:TaskService){
          this.tasksService = tasksService
    }

    // Methods 
    @Get('/tasks') // Decorator --> Need endpoint URL
    getAllTasks(){
       return this.tasksService.getTasks()
    }

    //  @Get('/') // Decorator --> Need endpoint URL
    // index(){
    //    return 'Homepage'
    // }
}