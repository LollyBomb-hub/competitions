import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsListPageComponent } from './competitions-list-page/competitions-list-page.component';
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsListPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgGridModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
