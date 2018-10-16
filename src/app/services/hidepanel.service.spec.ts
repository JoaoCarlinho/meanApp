import { TestBed } from '@angular/core/testing';

import { HidepanelService } from './hidepanel.service';

describe('HidepanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HidepanelService = TestBed.get(HidepanelService);
    expect(service).toBeTruthy();
  });
});
