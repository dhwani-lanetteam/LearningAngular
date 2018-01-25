import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UserService) {
    console.log("user1Activated : " + this.user1Activated);
    console.log("user2Activated : " + this.user2Activated);
  }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        console.log("the subject subscribed here : ");
        if (id === 1) {
          this.user1Activated = true;
          console.log("user1Activated : " + this.user1Activated);
        } else if (id === 2) {
          console.log("user2Activated : " + this.user2Activated);
          this.user2Activated = true;
        }
      }
    );

    const source = Observable.from([1,2,3,4,5]);
    const ex2 = source.map((val: number) => {
      console.log("BC : "+val);
      val = val + 10;
      return val;
    });
    ex2.subscribe((val: number) => { console.log(val) });
  }
}
