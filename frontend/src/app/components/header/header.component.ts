import { authService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nameUser: string;
  public totalItem: number = 0;

  constructor(
    private authService: authService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts()?.subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  getUserName() {
    return JSON.parse(localStorage.getItem('dataUser'))?.firstName;
  }
  getRole() {
    return JSON.parse(localStorage.getItem('dataUser') as any)?.isAdmin;
  }
  logout() {
    this.authService.IsLoggedOut();
    this.router.navigate(['']);
  }
  goTORegister() {
    this.router.navigate(['register']);
  }
  goTOLogin() {
    this.router.navigate(['login']);
  }

  gotoCart() {
    this.router.navigate(['cart']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }
}
