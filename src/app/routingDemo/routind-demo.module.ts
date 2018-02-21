import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import {ServerResolverService} from "./servers/server/server-resolver.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-service";
import {ServersService} from "./servers/servers.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  providers: [
    ServerResolverService,
    CanDeactivateGuard,
    ServersService
  ]
})
export class RoutindDemoModule { }
