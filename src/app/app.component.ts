import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayRecipes: boolean = false;

  // onTabClicked(event){
  //
  //   switch(event.clickedTab) {
  //     case "shopping-list":
  //       // console.log("cliked tab : shoppinglist");
  //       this.displayRecipes = true;
  //       break;
  //     case "recipes":
  //       // console.log("clicked tab : recipes");
  //       this.displayRecipes = false;
  //       break;
  //     default:
  //       console.log("default case");
  //   }
  // }
}
