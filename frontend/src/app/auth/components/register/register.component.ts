import { authService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/shared/user.type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  response: Iuser;

  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
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
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/),
        ],
      ],
    });
  }
  ngOnInit(): void {}
  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  submitForm() {
    this.authService.UserRegister(this.registerForm.value).subscribe(
      (res) => {
        if (res != null) {
          (this.response as any) = res;

          const { token, firstName, lastName, isAdmin, email } = this
            .response as any;
          localStorage.setItem('token', (this.response as any).token);
          localStorage.setItem(
            'dataUser',
            JSON.stringify({ firstName, lastName, isAdmin, email })
          );
          this.router.navigate(['']);
        }
      },
      (err) => {
        console.log(JSON.stringify(err.error.message) as any);
      }
    );
  }
}
