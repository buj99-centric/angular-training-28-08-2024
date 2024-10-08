import { Injectable } from '@angular/core';
import { Joke } from '../joke-details/models/joke.model';
import { filter, first, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private jokes: Joke[] = [
    {
      id: '1',
      title: 'Joke 1',
      content:
        'Chuck Norris does not fly coach OR first class. He travels by transcontinental flying sidekick.',
      date: new Date(),
    } as Joke,
    {
      id: '2',
      title: 'Joke 2',
      content:
        "As a kid, Chuck Norris's dog didn't eat his homework, his homework ate his dog",
      date: new Date(),
    } as Joke,
    {
      id: '3',
      title: 'Joke 3',
      content:
        'Little Miss Muffet sat on her tuffet, until Chuck Norris roundhouse kicked her into a glacier.',
      date: new Date(),
    } as Joke,
  ];

  getJokes(): Joke[] {
    return this.jokes;
  }

  getJokeById(id: string) {
    return this.jokes?.find((joke) => joke.id === id);
  }

<<<<<<< Updated upstream
  addJoke(content: string, author: string) {
    const newId = this.jokes.length + 1;
    const newJoke: Joke = {
      id: newId.toString(),
      content: content,
      title: `Joke by ${author}`,
      date: new Date(),
    };
    this.jokes.push(newJoke);
=======
  getJokeById1(id: string): Observable<Joke | undefined> {
    return of(this.getJokeById(id));
  }

  getJokeById2(id: string): Observable<Joke | undefined> {
    return from(this.jokes).pipe(filter(joke => joke.id === id));
  }

  getJokeById3(id: string): Observable<Joke | undefined> {
    return from(this.jokes).pipe(first(joke => joke.id === id));
>>>>>>> Stashed changes
  }
}
