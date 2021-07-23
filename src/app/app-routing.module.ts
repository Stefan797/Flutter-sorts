import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'board', component: BoardComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
