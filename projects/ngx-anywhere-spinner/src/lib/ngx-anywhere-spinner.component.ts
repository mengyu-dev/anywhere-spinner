import { Component, OnInit } from '@angular/core';


export class SpinnerData {
  message: string
}

@Component({
  selector: 'NgxAnywhereSpinner-NgxAnywhereSpinner',
  template: `
    <p>
      anywhere spinner works : {{data.message}}
    </p>
  `,
  styles: []
})
export class NgxAnywhereSpinnerComponent implements OnInit {

  constructor(public readonly data: SpinnerData) { }

  ngOnInit() {
  }

}
