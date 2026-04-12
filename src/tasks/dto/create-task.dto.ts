import { IsString, MinLength } from "class-validator";


export class CreateTaskDto {
    @IsString()
    @MinLength(5)
    title: string 

    @IsString()
    @MinLength(20)
    description: string
} 