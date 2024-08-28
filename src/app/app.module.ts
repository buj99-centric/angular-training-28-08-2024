import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeDetailsModule } from './joke-details/joke-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JokeDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
