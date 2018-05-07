import { TestBed, inject } from '@angular/core/testing';

import { DownloadtableService } from './downloadtable.service';

describe('DownloadtableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadtableService]
    });
  });

  it('should be created', inject([DownloadtableService], (service: DownloadtableService) => {
    expect(service).toBeTruthy();
  }));
});
