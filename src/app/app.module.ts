import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeDetailsModule } from './joke-details/joke-details.module';
import { JokeListComponent } from "./joke-list/joke-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JokeDetailsModule,
    JokeListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
