import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'projects/:id', component: ProjectsComponent},
  {path: 'board/:id', component: BoardComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'account', component: AccountComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
