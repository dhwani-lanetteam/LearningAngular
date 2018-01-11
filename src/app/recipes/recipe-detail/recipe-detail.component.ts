import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recepe.model";
import {RecipeService} from "../service/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeToDisplay: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {  }

  // closeDropDown(){
  //
  // }

}
