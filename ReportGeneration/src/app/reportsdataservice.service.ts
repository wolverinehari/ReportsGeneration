import { Injectable } from '@angular/core';
import { tableData } from './reportTableData';
import {reportTableData,loginContent} from './mockData'

@Injectable()
export class ReportsdataserviceService {
  alltabledataObject:tableData[]=reportTableData;
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
  checkvalidLogin(data:any):any{
    this.selectedlogin=this.loginData.filter(item=>item.username==data.username && item.password==data.password)
    return this.selectedlogin;
  }
}
