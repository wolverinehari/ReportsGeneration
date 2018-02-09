import { Injectable } from '@angular/core';
import { tableData } from './reportTableData';
import {reportTableData} from './mockData'

@Injectable()
export class ReportsdataserviceService {
  alltabledataObject:tableData[]=reportTableData;
  constructor() { }
  getTables(): tableData[] {
    return this.alltabledataObject;
  } 
}
