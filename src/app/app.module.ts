import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeDetailsModule } from './joke-details/joke-details.module';
import { JokeListComponent } from "./joke-list/joke-list.component";
import { provideRouter, RouterModule, withDebugTracing } from '@angular/router';
import { appRoutes } from './app.routes';
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JokeDetailsModule,
    JokeListComponent,
    RouterModule,
    LoaderComponent
],
  providers: [provideRouter(appRoutes)], //, withDebugTracing()
  bootstrap: [AppComponent]
})
export class AppModule { }
