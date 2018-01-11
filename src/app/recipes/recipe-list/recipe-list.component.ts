import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepe.model';
import {RecipeService} from "../service/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeItemClickEmit(recipe: Recipe){
  //   console.log("\n in recipe list component");
  //   console.log(recipe);
  //   // this.recipeListEmitter.emit(recipe);
  // }

}
