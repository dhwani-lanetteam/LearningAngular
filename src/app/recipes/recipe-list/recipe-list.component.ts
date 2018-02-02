import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recepe.model';
import {RecipeService} from "../service/recipe.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipesChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  ngOnDestroy(){
    this.recipesChangedSubscription.unsubscribe();
  }

  // onRecipeItemClickEmit(recipe: Recipe){
  //   console.log("\n in recipe list component");
  //   console.log(recipe);
  //   // this.recipeListEmitter.emit(recipe);
  // }

  onNewRecipe(){
    console.log("button click new");
    console.log("relativeTo: " + this.activatedRoute);
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
