import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./routing/page-not-found/page-not-found.component";
import {ServerComponent} from "./routing/servers/server/server.component";
import {EditServerComponent} from "./routing/servers/edit-server/edit-server.component";
import {ServersComponent} from "./routing/servers/servers.component";
import {UserComponent} from "./routing/users/user/user.component";
import {UsersComponent} from "./routing/users/users.component";
import {HomeComponent} from "./routing/home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuard} from "./routing/servers/edit-server/can-deactivate-service";
import {ErrorPageComponent} from "./routing/error-page/error-page.component";
import {ServerResolverService} from "./routing/servers/server/server-resolver.service";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent
      }
    ]
  },
  {
    path: "servers",
    // can be used to protect route or child route
    //takes array of all the guards you wanna apply to route
    //canActivate apply to its child routes automatically
    // canActivate: [AuthGuardService],
    //canActivateChild apply ti child only
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
      children: [
        {
          path: ":id/edit",
          component: EditServerComponent,
          canDeactivate: [CanDeactivateGuard] //angular will run this guard whenever I leave this component
        },
        {
          path: ":id",
          component: ServerComponent,
          resolve: {
            //here name of property can be any valid key string(totally up to developer)
            //server return by resolver will be assigned to the key server
            server: ServerResolverService
          }
        }
      ]
  },
  {
    path: "not-found",
    component: PageNotFoundComponent
  },
  {
    path: "something",
    redirectTo: "/not-found" // this is the alternative of component. component loads specific component but redirectTo will lead to the specified route or path
  },
  // more convenient way to catch route not covered by app
  // wildcard route
  // it should be last element as routes are configured top to bottom
  // {
  //   path: "**",
  //   component: PageNotFoundComponent
  // }
  {
    path: '**',
    component: ErrorPageComponent,
    //passinf static data to route
    data: {
      message: 'Page not found !! :('
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}) // in case where server do not return 404 page then I can tell server just to take care of things before hashsign(URL !) so case of 404 won't be handled by server on which app hosted and angular will manage it by self
  ],
  //exports says to angular that from this module,
  //if I want to add this module to the imports of another module,
  //what should be accessible to this module which imports this module
  exports: [
    RouterModule
  ]

})

//AppRoutingModule is used to out source the routes
export class AppRoutingModule {

}
