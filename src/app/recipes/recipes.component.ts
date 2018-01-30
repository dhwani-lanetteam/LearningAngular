import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {Recipe} from "./recepe.model";
import {RecipeService} from "./service/recipe.service";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
  encapsulation: ViewEncapsulation.None //none, native
})
export class RecipesComponent implements OnInit {

  // receivedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelectedEmitter.subscribe((recipe: Recipe)=>{
    //   // alert("name : " + recipe.name);
    //   this.receivedRecipe = recipe;
    // });
  }

  toShoppingListCLickSubscribe(ingredients: Ingredient[]){
    console.log("In toShoppingListCLickSubscribe");
    console.log(ingredients);
  }

  // onReceiveRecipeItem(event){
  //   console.log("\n in recipes.component.ts");
  //   console.log("\n event : ");
  //   console.log(event);
  //   this.receivedRecipe = event;
  // }

}
