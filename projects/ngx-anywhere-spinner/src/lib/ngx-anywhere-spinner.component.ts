import {Component, Input, OnInit} from '@angular/core';


export class SpinnerOptions {
  message?: string
  type?:string
  styleClass?: any
}

@Component({
  selector: 'NgxAnywhereSpinner',
  templateUrl: 'ngx-anywhere-spinner.component.html',
  styleUrls: ['ngx-anywhere-spinner.component.css']
})
export class NgxAnywhereSpinnerComponent implements OnInit {

  defaultOptions = {
    message: 'Loading',
    type: 'default',
    styleClass: []
  };

  @Input()
  public options: SpinnerOptions;

  constructor() {
  }

  ngOnInit() {
  }

}
