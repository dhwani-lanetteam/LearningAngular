import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //--- other approach is to use @ViewChild

  // set-value to over-write whole form
  // patch-value to just set some of the form controls by preserving rest

  @ViewChild('myform') myForm: NgForm;
  defaultSecretQuestion: string = 'teacher';
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: ''
  }

  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    //--- this approach will overwrite the values user has entered already
    //--- so not the best approach
    // this.myForm.setValue({
    //   dd_secret: "teacher",
    //   gender: "male",
    //   txt_answer: "default answer",
    //   userData:{
    //     txt_email: 'superuser@gmail.com',
    //     txt_username: suggestedName
    //   }
    // });


    //--- here is patch approach where I only overwrite specific control
    this.myForm.form.patchValue({
      userData: {
        txt_username: suggestedName
      }
    });
  }

  // onSubmit(form: ElementRef){
  // onSubmit(form: NgForm){
  //   console.log("onSubmit called");
  //   console.log(form);
  // }

  onSubmit(){
    //--- this approach of @ViewChild can be used in case when I need to access form not just on submit but before submit
    console.log(this.myForm);
    this.submitted = true;
    this.user.username = this.myForm.value.userData.txt_username;
    this.user.email = this.myForm.value.userData.txt_email;

    //resets form
    //empty form controls
    //reset the valid touched etc properties too
    this.myForm.reset();
  }
}
