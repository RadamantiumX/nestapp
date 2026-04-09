import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // Users PRIVATE PROPERTY
    private users = [
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
}
