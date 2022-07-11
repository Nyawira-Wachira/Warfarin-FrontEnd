import { TestBed } from '@angular/core/testing';

import { ReceptionregisterService } from './receptionregister.service';

describe('ReceptionregisterService', () => {
  let service: ReceptionregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
