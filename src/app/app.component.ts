import {Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'anywhere-spinner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnywhereSpinner';
  displayOverlay = [true, false]
  options = {message: 'Chargement en cours', type: 'ring'}

  spinnerStatus$: Subject<boolean> = new Subject();

  constructor() {
    let i = 0;
    window.setInterval(() => {
        i++;
        this.spinnerStatus$.next(this.displayOverlay[i % 2])
      },
      2000);

    window.setInterval(() => {
        this.options.message = new Date().toISOString();
      },
      100);
  }
}
