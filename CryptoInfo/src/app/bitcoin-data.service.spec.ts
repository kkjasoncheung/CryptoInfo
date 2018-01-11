import { TestBed, inject } from '@angular/core/testing';

import { BitcoinDataService } from './bitcoin-data.service';

describe('BitcoinDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinDataService]
    });
  });

  it('should be created', inject([BitcoinDataService], (service: BitcoinDataService) => {
    expect(service).toBeTruthy();
  }));
});
