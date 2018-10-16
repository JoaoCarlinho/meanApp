import { TestBed } from '@angular/core/testing';

import { ServicelistService } from './servicelist.service';

describe('ServicelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicelistService = TestBed.get(ServicelistService);
    expect(service).toBeTruthy();
  });
});
