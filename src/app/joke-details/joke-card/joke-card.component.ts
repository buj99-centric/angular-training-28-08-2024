import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() joke: Joke | undefined;
  @Output() like: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  getText(): string {
    return 'SOme text'; // TODO
  }

  likeJoke(): void {
    this.like.emit(true);
  }
}
