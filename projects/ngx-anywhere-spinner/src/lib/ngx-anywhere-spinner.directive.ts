import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicOverlay } from './dynamic-overlay';
import { SpinnerData, NgxAnywhereSpinnerComponent } from './ngx-anywhere-spinner.component';

@Directive({
  selector: '[anywhere-spinner]'
})
export class NgxAnywhereSpinnerDirective {

  @Input('anywhere-spinner-status') toggler: Observable<boolean>;
  @Input() spinnerData: SpinnerData;

  private overlayRef: OverlayRef;

  constructor(
    private host: ElementRef,
    private dynamicOverlay: DynamicOverlay,
    private parentInjector: Injector
  ) {}

  ngOnInit() {
    this.overlayRef = this.dynamicOverlay.createWithDefaultConfig(
      this.host.nativeElement
    );

    this.toggler.subscribe(show => {
      if (show) {
        const injector = this.getInjector(this.spinnerData, this.parentInjector);
        const loaderPortal = new ComponentPortal(
          NgxAnywhereSpinnerComponent,
          null,
          injector
        );

        this.overlayRef.attach(loaderPortal);
      } else {
        this.overlayRef.detach();
      }
    });
  }

  getInjector(data: SpinnerData, parentInjector: Injector): PortalInjector {
    const tokens = new WeakMap();

    tokens.set(SpinnerData, data);

    return new PortalInjector(parentInjector, tokens);
  }

}