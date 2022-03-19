import { authService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

nameUser:string;

  constructor(private authService:authService,private router:Router) {
  }

  ngOnInit(): void {



  }
  getUserName(){
    return localStorage.getItem('dataUser')
  }
  logout(){
this.authService.IsLoggedOut();
this.router.navigate(['login'])
  }
 goTORegister(){
   this.router.navigate(['register'])
 }
 goTOLogin(){
  this.router.navigate(['login'])
}

}
