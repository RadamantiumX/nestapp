import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
// The MIDDLEWARES can be chained with the "apply" method
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // Apply the middleware on routes ('/route') or methods ({path: '/route', method: 'GET'})
    consumer.apply(LoggerMiddleware).forRoutes({
      
        path: '/users',
        method: RequestMethod.GET
      
    },
    {
      path: '/users',
      method: RequestMethod.POST

    }
).apply(AuthMiddleware).forRoutes('users')
  }
}
