import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import type { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";

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
    getAllTasks(@Query() query: any){
       console.log(query)
       return this.tasksService.getTasks()
    }
    
    @Get('/:id')  // Get a param
    getTask(@Param('id') id:string){
        console.log(id)
        return this.tasksService.getTask(parseInt(id))
    }

    //  @Get('/') // Decorator --> Need endpoint URL
    // index(){
    //    return 'Homepage'
    // }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task)
    }

    @Put() // Comple update
    updateTask(@Body() task:UpdateTaskDto){
        return this.tasksService.updateTask(task)
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