import { TestBed } from '@angular/core/testing';

import { RechargeserService } from './rechargeser.service';

describe('RechargeserService', () => {
  let service: RechargeserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechargeserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
