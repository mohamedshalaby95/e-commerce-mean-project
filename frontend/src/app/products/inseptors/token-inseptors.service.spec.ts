import { TestBed } from '@angular/core/testing';

import { TokenInseptorsService } from './token-inseptors.service';

describe('TokenInseptorsService', () => {
  let service: TokenInseptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInseptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
