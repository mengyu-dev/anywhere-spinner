import {OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {Observable, ReplaySubject, Subscription} from 'rxjs';
import {DynamicOverlay} from './dynamic-overlay';
import {NgxAnywhereSpinnerComponent, SpinnerOptions} from './ngx-anywhere-spinner.component';

@Directive({
  selector: '[anywhere-spinner]'
})
export class NgxAnywhereSpinnerDirective {
  _subscription?: Subscription;

  @Input('anywhere-spinner-status$')
  set toggle$(status$: Observable<boolean>) {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._subscription = status$.subscribe(this._toggler$)
  }

  @Input('anywhere-spinner-options')
  options: SpinnerOptions

  @Input('anywhere-spinner-status')
  set toggle(status: boolean) {
    this._toggler$.next(status);
  }

  private _toggler$: ReplaySubject<boolean> = new ReplaySubject();
  private subscription: Subscription;
  private overlayRef: OverlayRef;
  private instance?: NgxAnywhereSpinnerComponent;

  constructor(
    private host: ElementRef,
    private dynamicOverlay: DynamicOverlay,
    private parentInjector: Injector
  ) {
    this.overlayRef = this.dynamicOverlay.createWithDefaultConfig(
      this.host.nativeElement
    );
    this.subscription = this._toggler$.subscribe(show => {
      if (show) {
        const injector = this.getInjector(this.parentInjector);
        const loaderPortal = new ComponentPortal(
          NgxAnywhereSpinnerComponent,
          null,
          injector
        );

        this.instance = this.overlayRef.attach(loaderPortal).instance;
        this.instance.options = this.options;
      } else {
        this.overlayRef.detach();
        this.instance = null;
      }
    });
  }

  ngOnDestroy() {
    console.debug("ngOnDestroy - NgxAnywhereSpinnerDirective");
    this.subscription.unsubscribe();
  }

  getInjector(parentInjector: Injector): PortalInjector {
    const tokens = new WeakMap();
    return new PortalInjector(parentInjector, tokens);
  }

}
