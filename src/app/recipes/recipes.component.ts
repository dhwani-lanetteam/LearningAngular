import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recepe.model";
import {RecipeService} from "./service/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  receivedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelectedEmitter.subscribe((recipe: Recipe)=>{
      alert("name : " + recipe.name);
      this.receivedRecipe = recipe;
    })
  }

  // onReceiveRecipeItem(event){
  //   console.log("\n in recipes.component.ts");
  //   console.log("\n event : ");
  //   console.log(event);
  //   this.receivedRecipe = event;
  // }

}
