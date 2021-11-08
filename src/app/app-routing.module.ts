import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { BoardComponent } from './board/board.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AccountComponent } from './account/account.component';
import { ArchivChartComponent } from './archiv-chart/archiv-chart.component';
import { DocumentationPagesComponent } from './documentation-pages/documentation-pages.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'projects/:id', component: ProjectsComponent},
  {path: 'board/:id', component: BoardComponent},
  {path: 'documentaionpage', component: DocumentationPageComponent},
  {path: 'documentaionpages', component: DocumentationPagesComponent},
  {path: 'administration/:id', component: AdministrationComponent},
  {path: 'account', component: AccountComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
