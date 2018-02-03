import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recepe.model";
import {RecipeService} from "../../service/recipe.service";
import {ActivatedRouteSnapshot, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  @Input('id') id: number;
  // @Output() recipeClickedEmitter = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
  private router: Router) { }

  ngOnInit() {
  }

  //my approach of onClick of item
  // onRecipeItemClick(){
  //   // this.recipeClickedEmitter.emit(this.recipe);
  //   // this.recipeService.recipeSelectedEmitter.emit(this.recipe);
  //   console.log("onRecipeItemClick called");
  //   console.log("this recipe : ");
  //   console.log(this.recipe);
  //   this.router.navigate(["/recipes",this.recipe.name]);
  // }
}
