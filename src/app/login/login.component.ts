import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  img = '../../assets/loginDemo.png';
  message = '';
  hide = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  check(username: string, password: string): void {}
  
  loginUser() {
    console.log(this.loginForm.value);
    this.httpClient.get<any>('http://localhost:3000/registration').subscribe(
      (res) => {
        const usern = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (usern) {
          alert('login success');
          this.loginForm.reset();
          this.router.navigate(['shop']);
        } else {
          alert('Invalid username and password');
        }
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
