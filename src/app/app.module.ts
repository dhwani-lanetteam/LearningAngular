import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CockpitComponent } from './server/cockpit/cockpit.component';
import { OnlyOddComponent } from './directivePractiseComponents/only-odd/only-odd.component';
import { NgSwitchDemoComponent } from './directivePractiseComponents/ng-switch-component/ng-switch-demo.component';
import {BasicHighLightDirective} from "./directivePractiseComponents/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './directivePractiseComponents/better-highlight/better-highlight.directive';
import { MoreOnRendererComponent } from './directivePractiseComponents/more-on-renderer/more-on-renderer.component';
import { BaconDirective } from './directivePractiseComponents/more-on-renderer/bacon/bacon.directive';
import { GoWildDirective } from './directivePractiseComponents/more-on-renderer/go-wild/go-wild.directive';
import { GrayBgHighlightDirective } from './directivePractiseComponents/gray-bg-highlight/gray-bg-highlight.directive';
import { UnlessDirective } from './directivePractiseComponents/unless/unless.directive';
import { ShoppinglistService } from "./shopping-list/service/shoppinglist.service";
import { AppShoppinglistRouting } from "./app-shoppinglist-routing.module";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { RecipeService } from "./recipes/service/recipe.service";
import { DataService } from "./shared/data.service";
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SharedModule } from "./shared/shared.module";
import { RoutindDemoModule } from "./routingDemo/routind-demo.module";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./core/core.module";
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "./shopping-list/shopping-edit/store/shopping-list.reducers";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    OnlyOddComponent,
    NgSwitchDemoComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    MoreOnRendererComponent,
    BaconDirective,
    GoWildDirective,
    GrayBgHighlightDirective,
    UnlessDirective,
    SignupComponent,
    SigninComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    /*
    * Routing export karelu 6.
    * Main routing file je directly app.module.ts ma import kareli 6
    * ema forRoot use karelu 6
    * bija badha module(feature) ke jema feature na respective routes 6
    * ema forChild use karelu 6.
    * */
    AppShoppinglistRouting, //RouterModule.forRoot(appRoutes)
    // RecipesModule, //RouterModule.forChild(recipesRoutes)
    SharedModule,
    RoutindDemoModule,
    CoreModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer}) //--- by adding this line ngrx setup a store, register shopiinglistreducer as one thing that can edit the store, and initialState as one piece of overall application state
  ],
  providers: [
    ShoppinglistService,
    AuthGuardService,
    AuthService,
    RecipeService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
