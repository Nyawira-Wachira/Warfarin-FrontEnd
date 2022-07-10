import { TestBed } from '@angular/core/testing';

import { LabregisterService } from './labregister.service';

describe('LabregisterService', () => {
  let service: LabregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
