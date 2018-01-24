// import {Routes, RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
// import { ServerComponent } from './server/server.component';
// import { ServerElementComponent } from './server/server-element/server-element.component';
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
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppinglistService} from "./shopping-list/service/shoppinglist.service";
import {CommonService} from "./shared/common.service";
import { ServersComponent } from './routing/servers/servers.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import {ServerComponent} from "./routing/servers/server/server.component";
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { HomeComponent } from './routing/home/home.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {ServersService} from "./routing/servers/servers.service";
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
// import {AppRoutingModule} from "./app-routing.module";
import {AppShoppinglistRouting} from "./app-shoppinglist-routing.module";
import {AuthGuardService} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import {CanDeactivateGuard} from "./routing/servers/edit-server/can-deactivate-service";
import {ErrorPageComponent} from "./routing/error-page/error-page.component";
import {ServerResolverService} from "./routing/servers/server/server-resolver.service";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    ServerComponent,
    // ServerElementComponent,
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
    DropdownDirective,
    ServersComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
    // AppRoutingModule
    AppShoppinglistRouting
  ],
  providers: [
    ShoppinglistService,
    CommonService,
    ServersService,
    AuthGuardService,
    AuthService,
    CanDeactivateGuard,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
