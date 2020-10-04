import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxAnywhereSpinnerComponent } from './ngx-anywhere-spinner.component';
import { NgxAnywhereSpinnerDirective } from './ngx-anywhere-spinner.directive';

@NgModule({
  declarations: [NgxAnywhereSpinnerComponent, NgxAnywhereSpinnerDirective],
  imports: [
    OverlayModule,
    CommonModule
  ],
  exports: [NgxAnywhereSpinnerDirective],
  entryComponents : [NgxAnywhereSpinnerComponent]
})
export class NgxAnywhereSpinnerModule { }
