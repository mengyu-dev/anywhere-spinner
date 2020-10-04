import { TestBed } from '@angular/core/testing';

import { NgxAnywhereSpinnerService } from './ngx-anywhere-spinner.service';

describe('NgxAnywhereSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAnywhereSpinnerService = TestBed.get(NgxAnywhereSpinnerService);
    expect(service).toBeTruthy();
  });
});
