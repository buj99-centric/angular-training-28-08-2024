import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from '../pipes/suffix.pipe';
import { JokeDetailsComponent } from './joke-details.component';

@NgModule({
  declarations: [
    JokeCardComponent,
    JokeDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SuffixPipe
  ],
  exports: [
    JokeDetailsComponent
  ]
})
export class JokeDetailsModule { }
