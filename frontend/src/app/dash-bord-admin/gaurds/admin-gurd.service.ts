import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGurdService  implements CanActivate{

  constructor(private authService:authService,private router:Router){

  }
  canActivate(){
    if(JSON.parse( localStorage.getItem("dataUser"))?.isAdmin)
    {
      return true;
    }
    else{
      this.router.navigate([""])
      return false
    }
  }
}
