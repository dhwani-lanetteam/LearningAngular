import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

const recipesRoutes: Routes = [
  {
    //--- changed for lazy loading
    // path: "recipes", //domain/recipes
    path: "", //domain/recipes
    component: RecipesComponent,
    children: [
      {
        path: "", //domain/recipes/
        component: RecipeStartComponent
      },
      /*
       * there was conflict
       * http://localhost:4200/recipes/new
       * http://localhost:4200/recipes/Test%20Recipe%203
       * if :name path appears first then it will load RecipeDetailComponent
       * so priority in defining routes matters
       * */
      {
        path: "new",
        component: RecipeEditComponent
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent
      },
      {
        path: ":id", //domain/recipes/recipename
        component: RecipeDetailComponent,
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
  constructor(){
    console.log("RecipesRoutingModule");
  }
}
