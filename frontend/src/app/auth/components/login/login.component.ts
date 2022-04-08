import { Router } from '@angular/router';
import { authService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../../shared/user.type';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  response: Iuser;
  loginForm: FormGroup;
  errorLogin: string;

  constructor(
    private authService: authService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/),
        ],
      ],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {}
  submitForm() {
    this.authService.UserLogin(this.loginForm.value).subscribe(
      (res) => {
        if (res != null) {
          (this.response as any) = res;
          const { token, firstName, lastName, isAdmin, email } = this
            .response as any;

          localStorage.setItem('token', (this.response as any).token);

          if (!localStorage.getItem('dataUser')) {
            localStorage.setItem(
              'dataUser',
              JSON.stringify({ firstName, lastName, isAdmin, email })
            );
          }
          this.router.navigate(['']);
        }
      },
      (err) => {
        this.loginForm.reset();
        this.errorLogin = JSON.stringify(err.error.message) as any;
      }
    );
  }
}
