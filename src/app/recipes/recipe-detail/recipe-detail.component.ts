import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recepe.model";
import {RecipeService} from "../service/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToDisplay: Recipe;

  constructor(private recipeService : RecipeService,
              private activatedRoute: ActivatedRoute,
              private roueter: Router
  ) { }

  ngOnInit() {
    console.log("ngOnInit RecipeDetailComponent");
    console.log("here :::: " + this.activatedRoute.snapshot.params['name']);
    // const recipeName = this.activatedRoute.snapshot.params['name'];
    // this.recipeToDisplay = this.recipeService.getRecipe(recipeName);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params['name'] : ",params['name']);
      this.recipeToDisplay = this.recipeService.getRecipe(params['name']);
    });
  }

  onEditClick(){
    console.log("onEditClick() of RecipeDetailComponent");
    // this.roueter.navigate(['/recipes'],this.recipeToDisplay.name+'/edit');
    // this.roueter.navigate(['edit'], {relativeTo: this.activatedRoute});
    //go up one level that is http://localhost:4200/recipes/
    //append name of recipe and edit path
    //specify it is relative to current path
    this.roueter.navigate(['../',this.recipeToDisplay.name,'edit'],{relativeTo: this.activatedRoute});
  }

  onToShoppingListClick(){
    console.log("onToShoppingListClick");
    console.log("send");
    console.log(this.recipeToDisplay);
    // this.toShoppingListCLickEmtr.emit(this.recipeToDisplay.ingredients);
    this.recipeService.addIngredientToShoppingList(this.recipeToDisplay.ingredients);
  }

  onDeleteClick(){
    this.recipeService.deleteRecipe(this.recipeToDisplay);
  }

}
