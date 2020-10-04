import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'anywhere-spinner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnywhereSpinner';
  displayOverlay = [true,false]
  options = {message:'data',type:'facebook',styleClass:"test"}

  spinnerStatus$: Observable<boolean> = interval(2000).pipe(
    map(i => {
      debugger;
      return this.displayOverlay[i%2]
    })
  );

  spinnerStatus: boolean = true;

  constructor(){
    window.setInterval(()=>{this.spinnerStatus = !this.spinnerStatus}, 5000);
  }  
}
