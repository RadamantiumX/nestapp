import { Injectable } from "@nestjs/common";

// Reusable methods file
// Inject code in all source projects app
// DB QUERYS METHODS/FN
@Injectable()
export class TaskService{
    getTasks(){
        return ['Task 1', 'Task 2', 'Task 3']
    }
}