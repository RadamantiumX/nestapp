import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// Here we can use the User Services
@Controller()
export class UsersController {

    // Short way to create a constructor
    constructor(private usersService:UsersService){} 
    @Get('/users')
    getUsers(){
       return this.usersService.getUsers()
    }

   
}
