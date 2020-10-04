import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxAnywhereSpinnerComponent } from './ngx-anywhere-spinner.component';
import { NgxAnywhereSpinnerDirective } from './ngx-anywhere-spinner.directive';

@NgModule({
  declarations: [NgxAnywhereSpinnerComponent, NgxAnywhereSpinnerDirective],
  imports: [
    OverlayModule
  ],
  exports: [NgxAnywhereSpinnerComponent]
})
export class NgxAnywhereSpinnerModule { }
