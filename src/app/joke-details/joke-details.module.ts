import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    JokeCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    JokeCardComponent
  ]
})
export class JokeDetailsModule { }
