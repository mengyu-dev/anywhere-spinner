import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnywhereSpinnerComponent } from './ngx-anywhere-spinner.component';

describe('NgxAnywhereSpinnerComponent', () => {
  let component: NgxAnywhereSpinnerComponent;
  let fixture: ComponentFixture<NgxAnywhereSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAnywhereSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnywhereSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
