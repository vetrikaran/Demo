import { TestBed } from '@angular/core/testing';

import { NewconnectService } from './newconnect.service';

describe('NewconnectService', () => {
  let service: NewconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
