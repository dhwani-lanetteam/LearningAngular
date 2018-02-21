import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../recipes/service/recipe.service";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService, private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSaveData(){
    console.log("onSaveData : ");
    this.dataService.storeRecipes().then(
      (response) => {
        console.log("response 123 : ", response);
      },
      (error) => {
        console.log("error : ",error);
      }
    );
  }

  onFetchData(){
    console.log("onFetchData : ");
    this.dataService.getRecipes().then(
      (response) => {
        console.log("response : ", response);
        this.recipeService.setRecipes(response);
      },
      (error) => {
        console.log("error : ", error);
      }
    )
  }

}
