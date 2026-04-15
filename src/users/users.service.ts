import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from 'generated/prisma/client';

@Injectable()
export class UsersService {

   constructor(private prisma: PrismaService){}

    getUsers(params:{
      skip?:number;
      take?:number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    }):Promise<User[]>{
       const { skip, take, cursor, where, orderBy } = params
        return this.prisma.user.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy
        })
    }

    createUser(data: Prisma.UserCreateInput):Promise<User>{
     
      return this.prisma.user.create({ data })
    }
}
