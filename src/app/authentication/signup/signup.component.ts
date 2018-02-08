import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignUp(signUpForm: NgForm){
    const email = signUpForm.value.txt_email;
    const password = signUpForm.value.txt_password;

    console.log(email + " ::: " + password);
  }

}
