import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { reportLandingData,reportTableData, loginContent, dataTableData } from './mockData'

@Injectable()
export class LocaldatasericeService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return { 'reportLandingData':reportLandingData,'reportTableData': reportTableData, 'loginContent': loginContent, 'dataTableData': dataTableData };
  }
}
