import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from "./username.validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method yet not implemented!");
  }

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });
  submit(login: any) {
    console.log('Form submitted!', login);
  }
  //validation
  get username() {
    return this.form.get('account.username');
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
};
