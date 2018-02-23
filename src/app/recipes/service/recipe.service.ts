import { Injectable } from '@angular/core';
import { Recipe } from "../recepe.model";
import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Idli Sambhar",
      "south indian dish",
      "assets/img/idlisambahr.jpg",
      [
        new Ingredient("r1 i1",5),
        new Ingredient("r1 i2",6)
      ]
    ),
    new Recipe(
      "Vada Pau",
      "just for snack",
      "assets/img/vadapau.jpg",
      [
        new Ingredient("r2 i1",4),
        new Ingredient("r2 i2",3)
      ]
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: string){
    console.log("getRecipe : ");
    const recipe = this.recipes[parseInt(id)];
    console.log(recipe);
    return recipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: string, newRecipe: Recipe){
    this.recipes[parseInt(id)] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe){
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }


}
