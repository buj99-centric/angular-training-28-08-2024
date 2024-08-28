import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from './pipes/suffix.pipe';

@NgModule({
  declarations: [
    JokeCardComponent,
    SuffixPipe
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
