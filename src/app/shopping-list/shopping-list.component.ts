import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {HelpeerServiceService} from "../shared/helpeer-service.service";
import {ShoppinglistService} from "./service/shoppinglist.service";
// import { Helper } from '../shared/Helper';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ HelpeerServiceService ]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {

    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientAddedEmtr.subscribe((ing: Ingredient) => {
      console.log("this ing is added : " + ing);
      this.shoppinglistService.ingredientsChangesEmtr.subscribe((ings: Ingredient[]) => {
        this.ingredients = ings;
      });
    });

  }

  // onIngredientEmission(ingredient: Ingredient){
  //   // ingredient.name = this.helper.ucfirst(ingredient.name);
  //   ingredient.name = this.helperService.ucfirst(ingredient.name);
  //   this.ingredients.push(ingredient);
  // }

  onEditClick(ingredient: Ingredient){
    console.log("shopping-list component" );
    console.log(ingredient);
    this.shoppinglistService.onEditClick(ingredient);
  }

}
