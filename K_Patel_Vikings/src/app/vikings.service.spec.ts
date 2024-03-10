import { TestBed } from '@angular/core/testing';

import { vikingsService } from './vikings.service';

describe('vikingsService', () => {
  let service: vikingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vikingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
