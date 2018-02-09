import { TestBed, inject } from '@angular/core/testing';

import { ReportsdataserviceService } from './reportsdataservice.service';

describe('ReportsdataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportsdataserviceService]
    });
  });

  it('should be created', inject([ReportsdataserviceService], (service: ReportsdataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
