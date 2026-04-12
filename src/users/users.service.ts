import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    // Users PRIVATE PROPERTY
    private users:any = [
          {
            id: 1,
            name: 'John Doe',
            phone: '1234-5678'
          },
          {
            id: 2,
            name: 'Momba Dick',
            phone: '1234-3699'
          },
    ]

    getUsers(){
        return this.users;
    }

    createUser(user: CreateUserDto){
      this.users.push(user)
      return {
        ...user,
        id: this.users.length + 1
      }
    }
}
