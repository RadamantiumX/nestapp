import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

// Here we can use the User Services
@Controller()
export class UsersController {

    // Short way to create a constructor
    constructor(private usersService:UsersService){} 
    @Get('/users')
    getUsers(){
       return this.usersService.getUsers()
    }

    @Post('/users')
    createUser(@Body() user:CreateUserDto){
        return this.usersService.createUser(user)
    }
}
