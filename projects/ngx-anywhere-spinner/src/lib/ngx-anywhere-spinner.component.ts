import { Component, OnInit, ViewEncapsulation } from '@angular/core';


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

  constructor(public readonly options: SpinnerOptions) { }

  ngOnInit() {
  }

}
