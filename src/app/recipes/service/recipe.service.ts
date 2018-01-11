import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "../recepe.model";

@Injectable()
export class RecipeService {

  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe 1", "This is some description", "assets/img/veg-spring-rolls-recipe.jpg"),
    new Recipe("Test Recipe 2", "This is description 2", "assets/img/veg-spring-rolls-recipe.jpg"),
    new Recipe("Test Recipe 3", "This is description 3", "assets/img/veg-spring-rolls-recipe.jpg")
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
