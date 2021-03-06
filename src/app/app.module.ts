import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProjectsComponent } from './projects/projects.component';
import {MatButtonModule} from '@angular/material/button';
import { BoardComponent } from './board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AdministrationComponent } from './administration/administration.component';
import {MatIconModule} from '@angular/material/icon';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AccountComponent } from './account/account.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
// import { MatDialogRef } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {  ReactiveFormsModule } from '@angular/forms';
import { ArchivChartComponent } from './archiv-chart/archiv-chart.component';
import { DocumentationPagesComponent } from './documentation-pages/documentation-pages.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectsComponent,
    BoardComponent,
    AdministrationComponent,
    CreateTicketComponent,
    AccountComponent,
    EditTicketComponent,
    ArchivChartComponent,
    DocumentationPagesComponent,
    DocumentationPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
