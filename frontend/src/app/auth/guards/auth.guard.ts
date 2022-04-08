import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { authService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private authService: authService, private router: Router) {}
  canActivate() {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
