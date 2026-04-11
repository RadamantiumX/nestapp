import { Controller, Get, Req, Res, Next } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class HomeController {

    @Get('/')
    index(@Req() request: Request, @Res() response: Response){
        response.status(200).json({
            message: 'Home page'
        })
    }
}
