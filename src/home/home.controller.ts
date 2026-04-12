import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, ParseBoolPipe, Query } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';

@Controller()
export class HomeController {

    @Get('/')
    index(@Req() request: Request, @Res() response: Response){
        response.status(200).json({
            message: 'Home page'
        })
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error page'
    }
    
    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num:number){
         // @ParseIntPipe ==> Convert the "param" string --> to number
        return num + 14
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){
         // @ParseBoolPipe ==> Convert the "param" string --> to boolean
        console.log(typeof status)
        return 'User status'
    }
    
    @Get('greet')
    greet(@Query(ValidateuserPipe) query: {name: string, age:number}){
        console.log(typeof query.name)
        console.log(typeof query.age)
       return `Hello ${query.name}... Your age are ${query.age} years old`
    }
}
