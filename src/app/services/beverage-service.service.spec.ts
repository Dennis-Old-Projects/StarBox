import { TestBed, inject } from '@angular/core/testing';

import { BeverageServiceService } from './beverage-service.service';

describe('BeverageServiceService', () => {
  let service : BeverageServiceService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeverageServiceService]
    });
    service = new BeverageServiceService();
  });

  it('#getBeverages should be greater than 0', () => {
    expect(service.getBeverages().length).not.toBeLessThan(0);
  });
  
  
});
