import { TestBed, inject } from '@angular/core/testing';

import { CalEventService } from './cal-event.service';

describe('CalEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalEventService]
    });
  });

  it('should be created', inject([CalEventService], (service: CalEventService) => {
    expect(service).toBeTruthy();
  }));
});
