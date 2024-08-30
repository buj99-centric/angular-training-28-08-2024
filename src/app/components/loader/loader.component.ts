import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if(event instanceof NavigationEnd) {
        this.isLoading = false;
      }

      console.log(event);
    });
  }
}
