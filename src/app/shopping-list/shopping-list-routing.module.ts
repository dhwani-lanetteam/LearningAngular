import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const shoppingListRoutes: Routes = [
  {
    path: "shopping-list", //domain/shopping-list
    component: ShoppingListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule {
  constructor(){
    console.log("ShoppingListRoutingModule");
  }
}
