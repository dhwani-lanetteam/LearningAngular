import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGuardService } from "../auth-guard.service";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-service";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ErrorPageComponent} from "./error-page/error-page.component";

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
    //passing static data to route
    data: {
      message: 'Page not found !! :('
    }
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class RoutindDemoRoutesModule { }
