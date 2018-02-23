import { Injectable } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppinglistService {

  private ingredients: Ingredient[] = [
    new Ingredient("Apple",1),
    new Ingredient("Butter",2)
  ];

  ingredientsChangesSbjct: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

  constructor() { }

  getIngredient(index: number){
    console.log("index : ", index);
    console.log(this.ingredients[index]);
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChangesSbjct.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChangesSbjct.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    console.log("delete this : ", index);
    console.log(this.ingredients[index]);
    this.ingredients.splice(index, 1);
    this.ingredientsChangesSbjct.next(this.ingredients.slice());
  }
}





