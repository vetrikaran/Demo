import { TestBed } from '@angular/core/testing';

import { CreateinqserService } from './createinqser.service';

describe('CreateinqserService', () => {
  let service: CreateinqserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateinqserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
