import { TestBed } from '@angular/core/testing';

import { LhAngularMasterService } from './lh-angular-master.service';

describe('LhAngularMasterService', () => {
  let service: LhAngularMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LhAngularMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
