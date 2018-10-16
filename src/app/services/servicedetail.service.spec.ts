import { TestBed } from '@angular/core/testing';

import { ServicedetailService } from './servicedetail.service';

describe('ServicedetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicedetailService = TestBed.get(ServicedetailService);
    expect(service).toBeTruthy();
  });
});
