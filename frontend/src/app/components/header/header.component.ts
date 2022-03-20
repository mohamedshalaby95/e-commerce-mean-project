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


    return JSON.parse( localStorage.getItem("dataUser"))?.firstName
  }
  getRole(){
    return JSON.parse( localStorage.getItem("dataUser") as any)?.isAdmin
  }
  logout(){
this.authService.IsLoggedOut();
this.router.navigate([''])
  }
 goTORegister(){
   this.router.navigate(['register'])
 }
 goTOLogin(){
  this.router.navigate(['login'])
}
goToControll(){
  this.router.navigate(['admin'])
}

}
