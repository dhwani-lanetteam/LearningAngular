import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsername = ['fu1','fu2'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      // new FormControl(defaultValue, Validator)
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), //who is calling forbiddenNames. ANGULAR calls it when it checks validity. At that point of time `this` does not refer to our class so it gives error
        //to avoid error we need to bind `this` with that validator
        //--- I love this feature of asynchronous validator
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail.bind(this)]),
      }),
      'gender': new FormControl(this.genders[1]),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log("value : ");
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log("status : ");
      console.log(status);
    });

    this.signupForm.setValue({
      'userData':{
        'username': 'dhwani',
        'email': 'dhwani@gmail.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.setValue({
      'userData':{
        'username': 'vaidehi',
      }
    });
  }

  onSubmitCall(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(){
    // this.signupForm.get('hobbies');
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}
  {
    //error
    //Cannot read property 'forbiddenUsername' of undefined
    if (this.forbiddenUsername.indexOf(control.value) !== -1  ){
      return {
        'nameIsForbidden': true
      }
    }
    //return null or do not add return statement at all(omit it)
    //do not use false
    //this is how you say that it is valid
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any>
  {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        if(control.value === 'test@gmail.com'){
          resolve({
            'emailForbidden': true
          });
        } else {
          resolve(null);
        }
      },5000);
    });
    return promise;
  }
}
