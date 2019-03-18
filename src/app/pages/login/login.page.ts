import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'email': [
      { type: 'required', message: 'E-mail is required.'},
      { type: 'minlength', message: 'E-mail length must be longer or equal to 6 characters.'},
      { type: 'maxlength', message: 'E-mail length must be lower or equal to 50 characters.'},
      { type: 'pattern', message: 'Please enter a valid e-mail address.'},
    ],
    'password': [
      { type: 'required', message: 'Password is required.'},
      { type: 'minlength', message: 'Password length must be longer or equal to 6 characters.'},
      { type: 'maxlength', message: 'Password length must be lower or equal to 30 characters.'},
      { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters.'},
    ]
  }

  constructor(
    public formBuilder: FormBuilder
  ) {
      this.loginForm = this.formBuilder.group({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
        ]))
      });
    }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value)
  }
}
