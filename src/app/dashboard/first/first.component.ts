import { ChangeDetectionStrategy, Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  counter: WritableSignal<number> = signal(1);
  doubleCounter: Signal<number> = computed(() => this.counter() * 2 );

  constructor() {
    effect(() => {
      console.log(`effect ${this.counter}`);
    });
  }

  increment() {
    //this.counter.update(currentValue => currentValue + 1);
   // setTimeout(() => {
      this.counter.set(this.counter() + 1);
   // }, 1000);
    
  }
}
