import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Joke } from '../joke-details/models/joke.model';
import { JokeDetailsModule } from '../joke-details/joke-details.module';
import { ActivatedRoute } from '@angular/router';
import { JokesService } from './jokes.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule, JokeDetailsModule, FormsModule, ReactiveFormsModule],
  //providers: [JokesService],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss',
})
export class JokeListComponent {
  jokes: Joke[] | undefined;
  joke: Joke | undefined;
  newJokeModel = {
    newJokeContent: '',
    author: '',
  };

  formGroup: FormGroup = new FormGroup({
    content: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(4),
      this.getCustomValidator(),
    ]),
    author: new FormControl<string | null>('', [Validators.required]),
  });
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private jokesService: JokesService = inject(JokesService);

  constructor() {
    this.jokes = this.jokesService.getJokes();

    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.jokesService.getJokeById3(params['id']).subscribe(joke => {
        this.joke = joke;
      });
    }
  }
  addJoke() {
    const { content, author } = this.formGroup.getRawValue();
    this.jokesService.addJoke(content, author);
  }

  getCustomValidator(): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      if (!control.value.match('\\d{6}')) {
        return {
          customValidatorError: 'not a match',
        };
      }

      return null;
    };
  }
}
