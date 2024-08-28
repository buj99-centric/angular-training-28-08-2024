import { AfterViewInit, Component, SimpleChanges, ViewChild } from '@angular/core';
import { Joke } from './models/joke.model';
import { JokeCardComponent } from './joke-card/joke-card.component';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.scss'
})
export class JokeDetailsComponent implements AfterViewInit {
  @ViewChild('jokeCard') jokeCardComponent: JokeCardComponent | undefined; 

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.jokeCardComponent?.getText());
  }

  joke: Joke = {
    title: "My joke",
    content: "Chuck Norris can drive an aircraft carrier by himself.",
    date: new Date()
  };

  likeJoke(isJokeLiked: boolean) {
    console.log(isJokeLiked);
  }
}
