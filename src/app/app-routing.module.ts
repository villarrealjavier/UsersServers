import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { AuthGuard } from './servers/services/AuthGuard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate:[AuthGuard],
    children: [
      { 
        path: ':id', 
        component: UserComponent }
    ]
  },
  
  {
    path: 'servers',
    component: ServersComponent,
    canActivate:[AuthGuard],
    children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent}
    ]
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
