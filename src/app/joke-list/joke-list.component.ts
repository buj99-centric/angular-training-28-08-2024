import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Joke } from '../joke-details/models/joke.model';
import { JokeDetailsModule } from "../joke-details/joke-details.module";
import { ActivatedRoute } from '@angular/router';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule, JokeDetailsModule],
  //providers: [JokesService],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss'
})
export class JokeListComponent {
  jokes: Joke[] | undefined;
  joke: Joke | undefined;

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private jokesService: JokesService = inject(JokesService);

  constructor() {
    this.jokes = this.jokesService.getJokes();

    const params = this.activatedRoute.snapshot.params;
    if(params['id']) {
      this.joke = this.jokesService.getJokeById(params['id']);
    }

    // this.activatedRoute.params.subscribe((params) => {
    //   if(params['id']) {
    //     this.joke = this.jokes?.find(joke => joke.id === params['id']);
    //   }
    // });

  }


}
