import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../app-services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInseptorService implements HttpInterceptor {

  constructor(private loaderService:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.loaderService.isLoading.next(true)
   console.log( "send request"+this.loaderService.isLoading.value)
   return next.handle(req).pipe(
     finalize(()=>{
       this.loaderService.isLoading.next(false)
       console.log( "response"+this.loaderService.isLoading.value)
     })
   )
  }
}
