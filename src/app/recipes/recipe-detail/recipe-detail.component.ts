import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recepe.model";
import {RecipeService} from "../service/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipeToDisplay: Recipe;
  recipeToDisplay: Recipe;
  // @Output() toShoppingListCLickEmtr: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor(private recipeService : RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("ngOnInit RecipeDetailComponent");
    console.log(this.activatedRoute.snapshot.params['name']);
    // const recipeName = this.activatedRoute.snapshot.params['name'];
    // this.recipeToDisplay = this.recipeService.getRecipe(recipeName);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeToDisplay = this.recipeService.getRecipe(params['name']);
    });
  }

  // closeDropDown(){
  //
  // }

  onToShoppingListClick(){
    console.log("onToShoppingListClick");
    console.log("send");
    console.log(this.recipeToDisplay);
    // this.toShoppingListCLickEmtr.emit(this.recipeToDisplay.ingredients);
    this.recipeService.addIngredientToShoppingList(this.recipeToDisplay.ingredients);
  }

}
