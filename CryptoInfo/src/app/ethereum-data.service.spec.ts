import { TestBed, inject } from '@angular/core/testing';

import { EthereumDataService } from './ethereum-data.service';

describe('EthereumDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthereumDataService]
    });
  });

  it('should be created', inject([EthereumDataService], (service: EthereumDataService) => {
    expect(service).toBeTruthy();
  }));
});
