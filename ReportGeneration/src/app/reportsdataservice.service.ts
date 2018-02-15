import { Injectable } from '@angular/core';
import { tableData,datatableData } from './reportTableData';
import {reportTableData,loginContent,dataTableData} from './mockData'

@Injectable()
export class ReportsdataserviceService {
  alltabledataObject:tableData[]=reportTableData;
  allDatatableObject:datatableData[]=dataTableData;
 loginData:any=loginContent;
  selectedlogin:any=[{
    username:'user1',
    password:'user1',
    action:'default1'
  }];
  constructor() { }
  getTables(): tableData[] {
    return this.alltabledataObject;
  } 
  getDataTables(index): datatableData[] {
    var copyArray=Object.assign([],this.allDatatableObject);
    return copyArray.splice((index-1)*4,4);
  } 
  checkvalidLogin(data:any):any{
    this.selectedlogin=this.loginData.filter(item=>item.username==data.username && item.password==data.password)
    return this.selectedlogin;
  }
}
