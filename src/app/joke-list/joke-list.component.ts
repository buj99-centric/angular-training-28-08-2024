import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Joke } from '../joke-details/models/joke.model';
import { JokeDetailsModule } from "../joke-details/joke-details.module";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule, JokeDetailsModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss'
})
export class JokeListComponent {
  jokes: Joke[] | undefined;
  joke: Joke | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.initilizeJokes();
    const params = activatedRoute.snapshot.params;
    if(params['id']) {
      this.joke = this.jokes?.find(joke => joke.id === params['id']);
    }

    // this.activatedRoute.params.subscribe((params) => {
    //   if(params['id']) {
    //     this.joke = this.jokes?.find(joke => joke.id === params['id']);
    //   }
    // });

  }

  initilizeJokes() {
    this.jokes = [
      {id: '1', title: 'Joke 1', content: 'Chuck Norris does not fly coach OR first class. He travels by transcontinental flying sidekick.', date: new Date()} as Joke,
      {id: '2',  title: 'Joke 2', content: 'As a kid, Chuck Norris\'s dog didn\'t eat his homework, his homework ate his dog', date: new Date()} as Joke,
      {id: '3',  title: 'Joke 3', content: 'Little Miss Muffet sat on her tuffet, until Chuck Norris roundhouse kicked her into a glacier.', date: new Date()} as Joke,
    ];
  }
}
