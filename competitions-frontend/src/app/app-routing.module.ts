import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CompetitionsListPageComponent} from "./competitions-list-page/competitions-list-page.component";
import {ParticipantsListPageComponent} from "./participants-list-page/participants-list-page.component";
import {ParticipantInfoComponentComponent} from "./participant-info-component/participant-info-component.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "competitions", component: CompetitionsListPageComponent },
  { path: "participants", component: ParticipantsListPageComponent },
  { path: "participant/:participantId", component: ParticipantInfoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
