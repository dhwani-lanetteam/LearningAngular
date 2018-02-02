import {Injectable} from '@angular/core';
import {Recipe} from "../recepe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppinglistService} from "../../shopping-list/service/shoppinglist.service";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  // recipeSelectedEmitter = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private shoppingListServide: ShoppinglistService,
              private activatedRoute: ActivatedRoute
  ) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    console.log("addIngredientToShoppingList : ");
    console.log(ingredients);
    this.shoppingListServide.addIngredients(ingredients);
  }

  getRecipe(name: string){
    const recipe = this.recipes.find(
      (r) => {
        return r.name === name; //=== compares data type along with content. 3 not equals to "3"
      }
    );
    return recipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(name: string, newRecipe: Recipe){
    //-- silly logic actually
    const recipe = this.recipes.find(
      (r) => {
        return r.name === name; //=== compares data type along with content. 3 not equals to "3"
      }
    );
    // console.log("before update : ",this.recipes);
    const indexToUpdate = this.recipes.indexOf(recipe);
    console.log("indexToUpdate : ",indexToUpdate);
    // this.recipes[indexToUpdate] = newRecipe;
    // console.log("after update : ",this.recipes);
    // this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe){
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }


}
