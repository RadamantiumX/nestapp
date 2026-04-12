import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// This is a reusable logic

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request
    console.log(request.url)
    
    // If the URL haven't the query params, the request it's fobidden (403)
    if(request.url === '/greet') return false

    // If the HEADERS contains the "authorization" value
    // if(!request.headers['authorization']) return false

    return true;
  }
}
