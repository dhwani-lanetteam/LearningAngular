import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "../recepe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppinglistService} from "../../shopping-list/service/shoppinglist.service";

@Injectable()
export class RecipeService {

  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe 1",
      "This is some description",
      "assets/img/veg-spring-rolls-recipe.jpg",
      [
        new Ingredient("r1 i1",5),
        new Ingredient("r1 i2",6)
      ]
    ),
    new Recipe(
      "Test Recipe 2",
      "This is description 2",
      "assets/img/veg-spring-rolls-recipe.jpg",
      [
        new Ingredient("r2 i1",4),
        new Ingredient("r2 i2",3)
      ]
    ),
    new Recipe(
      "Test Recipe 3",
      "This is description 3",
      "assets/img/veg-spring-rolls-recipe.jpg",
      [
        new Ingredient("r3 i1",1),
        new Ingredient("r3 i2",2)
      ]
    )
  ];

  constructor(private shoppingListServide: ShoppinglistService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListServide.addIngredients(ingredients);
  }

}
