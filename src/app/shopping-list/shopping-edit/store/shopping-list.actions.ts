import { Action } from "@ngrx/store";
import { Ingredient } from "../../../shared/ingredient.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; //--- this is the only property of Actions
  // payload: Ingredient; //--- Extra information that is added manually as per requirement

  constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action{
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]){}
}

//--- union type operator -> |
export type ShoppingListActions = AddIngredient | AddIngredients;
