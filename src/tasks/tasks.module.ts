import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TaskService } from "./task.service";

// Adding the decorator
// Inside the CONTROLLER ARRAY put the "Tasks" Controllers
@Module({
    controllers: [TaskController],
    providers:[TaskService]
})
export class TasksModule{

}