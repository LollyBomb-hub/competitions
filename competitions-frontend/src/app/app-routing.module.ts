import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CompetitionsListPageComponent} from "./competitions-list-page/competitions-list-page.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "competitions", component: CompetitionsListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
