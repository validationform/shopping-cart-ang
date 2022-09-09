import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  img = '../../assets/loginDemo.png';
  hide = true;
  public signUpForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
        ),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }
  signUp() {
    this.httpClient
      .post<any>('http://localhost:3000/registration', this.signUpForm.value)
      .subscribe(
        (res) => {
          alert('signUp successfully');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
  check(): void {}

  exixtingUser(): void {
    this.router.navigate(['/login']);
  }

  get fullName() {
    return this.signUpForm.get('fullName');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get mobile() {
    return this.signUpForm.get('mobile');
  }
  get email() {
    return this.signUpForm.get('email');
  }
}
