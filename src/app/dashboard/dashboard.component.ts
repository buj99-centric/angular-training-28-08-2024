import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit, DoCheck {
  text: string = "Function called";

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }


  ngDoCheck(): void {
    console.log('change detection occured');
  }


  ngAfterViewInit(): void {
    console.log('view initialized');
  }

  getText(): string {
    console.log(this.text);
    return this.text;
  }

  updateText(): void {
    setTimeout(() => {
      this.text = 'text updated';
      this.changeDetectorRef.detectChanges();
    }, 5000);
  }

}
