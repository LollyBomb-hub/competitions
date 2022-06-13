import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompetitionsListPageComponent} from './competitions-list-page/competitions-list-page.component';
import {AgGridModule} from "ag-grid-angular";
import {CompetitionModalCreationComponent} from './competition-modal-creation/competition-modal-creation.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { CompetitionModalUpdateComponent } from './competition-modal-update/competition-modal-update.component';
import { ParticipantsListPageComponent } from './participants-list-page/participants-list-page.component';
import { ParticipantModalCreationComponent } from './participant-modal-creation/participant-modal-creation.component';
import { ParticipantInfoComponentComponent } from './participant-info-component/participant-info-component.component';
import { ParticipantRegistrationComponent } from './participant-registration-component/participant-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListPageComponent,
    CompetitionModalCreationComponent,
    CompetitionModalUpdateComponent,
    ParticipantsListPageComponent,
    ParticipantModalCreationComponent,
    ParticipantInfoComponentComponent,
    ParticipantRegistrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
