import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

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
  }
}
