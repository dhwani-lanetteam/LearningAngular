import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recepe.model";
import {RecipeService} from "../../service/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  // @Output() recipeClickedEmitter = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeItemClick(){
    // this.recipeClickedEmitter.emit(this.recipe);
    this.recipeService.recipeSelectedEmitter.emit(this.recipe);
  }
}
