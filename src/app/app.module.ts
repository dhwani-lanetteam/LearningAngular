import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
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
import { ServersComponent } from './routing/servers/servers.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from "./routing/servers/server/server.component";
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { HomeComponent } from './routing/home/home.component';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ServersService } from "./routing/servers/servers.service";
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppShoppinglistRouting } from "./app-shoppinglist-routing.module";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { CanDeactivateGuard } from "./routing/servers/edit-server/can-deactivate-service";
import { ErrorPageComponent } from "./routing/error-page/error-page.component";
import { ServerResolverService } from "./routing/servers/server/server-resolver.service";
import { RecipeService } from "./recipes/service/recipe.service";
import { DataService } from "./shared/data.service";
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { RecipesModule } from "./recipes/recipes.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServerComponent,
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
    ServersComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SignupComponent,
    SigninComponent
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
    RecipesModule, //RouterModule.forChild(recipesRoutes)
    SharedModule
  ],
  providers: [
    ShoppinglistService,
    ServersService,
    AuthGuardService,
    AuthService,
    CanDeactivateGuard,
    ServerResolverService,
    RecipeService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
