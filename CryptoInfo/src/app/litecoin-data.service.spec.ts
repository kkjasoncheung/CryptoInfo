import { TestBed, inject } from '@angular/core/testing';

import { LitecoinDataService } from './litecoin-data.service';

describe('LitecoinDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LitecoinDataService]
    });
  });

  it('should be created', inject([LitecoinDataService], (service: LitecoinDataService) => {
    expect(service).toBeTruthy();
  }));
});
