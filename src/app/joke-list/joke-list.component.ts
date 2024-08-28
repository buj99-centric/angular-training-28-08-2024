import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.scss'
})
export class JokeListComponent {

}
