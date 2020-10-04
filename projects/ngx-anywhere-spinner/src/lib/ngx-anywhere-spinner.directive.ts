import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import { DynamicOverlay } from './dynamic-overlay';
import { NgxAnywhereSpinnerComponent, SpinnerOptions } from './ngx-anywhere-spinner.component';

@Directive({
  selector: '[anywhere-spinner]'
})
export class NgxAnywhereSpinnerDirective {

  @Input('anywhere-spinner-status$') toggler$: Observable<boolean> = new Subject();
  @Input('anywhere-spinner-options') spinnerOptions: SpinnerOptions;
  @Input('anywhere-spinner-status') 
  set toggle(status: boolean){
    this._toggler$.next(status);
  }

  private _toggler$: Subject<boolean> = new Subject();
  private subscription: Subscription;

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

  this.subscription = merge(this._toggler$,this.toggler$).subscribe(show => {
      if (show) {
        const injector = this.getInjector(this.spinnerOptions, this.parentInjector);
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

  ngOnDestroy() {
    console.debug("ngOnDestroy - NgxAnywhereSpinnerDirective");
    this.subscription.unsubscribe();
}

  getInjector(options: SpinnerOptions, parentInjector: Injector): PortalInjector {
    const tokens = new WeakMap();
    tokens.set(SpinnerOptions, options);
    return new PortalInjector(parentInjector, tokens);
  }

}
