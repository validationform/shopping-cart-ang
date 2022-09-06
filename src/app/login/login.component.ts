import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  img = '../../assets/loginDemo.png';
  message = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  check(username: string, password: string): void {
   
  }
  loginUser() {
    console.log(this.loginForm.value);
  }
  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
