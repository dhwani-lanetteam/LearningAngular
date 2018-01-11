import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {HelpeerServiceService} from "../shared/helpeer-service.service";
// import { Helper } from '../shared/Helper';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ HelpeerServiceService ]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Apple",1),
    new Ingredient("Butter",2)
  ];

  // helper = new Helper();

  constructor(private helperService: HelpeerServiceService) { }

  ngOnInit() {

  }

  onIngredientEmission(ingredient: Ingredient){
    // ingredient.name = this.helper.ucfirst(ingredient.name);
    ingredient.name = this.helperService.ucfirst(ingredient.name);
    this.ingredients.push(ingredient);
  }

}
