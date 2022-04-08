import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private router: RouterModule, private httpclient: HttpClient) {}

  UserLogin(userLogin: { email: String; password: String }) {
    return this.httpclient.post(`${environment.baseUrl}/login`, userLogin);
  }

  UserRegister(userRegister: {
    email: String;
    password: String;
    firstName: string;
    lastName: string;
  }) {
    return this.httpclient.post(`${environment.baseUrl}/user`, userRegister);
  }
  isLogged() {
    return localStorage.getItem('token') != null;
  }
  IsLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('dataUser');
  }
  getToken() {
    return localStorage.getItem('token') || '';
  }
}
