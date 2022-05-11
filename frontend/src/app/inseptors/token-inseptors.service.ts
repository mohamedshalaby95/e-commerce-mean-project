import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInseptorsService implements HttpInterceptor {
  constructor(private authService: authService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken().trim()} `,
      },
    });
    return next.handle(jwtToken);
  }
}
