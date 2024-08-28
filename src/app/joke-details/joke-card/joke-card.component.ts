import { Component } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {
  joke: Joke = {
    title: "My joke", content: "Chuck Norris can drive an aircraft carrier by himself."
  };
}
