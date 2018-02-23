import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recepe.model";
import { RecipeService } from "../service/recipe.service";
import { Ingredient } from "../../shared/ingredient.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from './../../shopping-list/shopping-edit/store/shopping-list.actions'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToDisplay: Recipe;
  recipeToDisplayId: string;

  constructor(private recipeService : RecipeService,
              private activatedRoute: ActivatedRoute,
              private roueter: Router,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
  ) { }

  ngOnInit() {
    console.log("ngOnInit RecipeDetailComponent");
    console.log("here :::: " + this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params['id'] : ",params['id']);
      this.recipeToDisplay = this.recipeService.getRecipe(params['id']);
      this.recipeToDisplayId = params['id'];
    });
  }

  onEditClick(){
    console.log("onEditClick() of RecipeDetailComponent");
    //go up one level that is http://localhost:4200/recipes/
    //append id of recipe and edit path
    //specify it is relative to current path
    this.roueter.navigate(['../',this.recipeToDisplayId,'edit'],{relativeTo: this.activatedRoute});
  }

  onToShoppingListClick(){
    console.log("AddIngredients action is dispatching");
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeToDisplay.ingredients));
  }

  onDeleteClick(){
    this.recipeService.deleteRecipe(this.recipeToDisplay);
    this.roueter.navigate(['/recipes']);
  }

}
