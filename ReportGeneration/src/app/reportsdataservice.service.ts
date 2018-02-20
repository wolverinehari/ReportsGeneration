import { Injectable } from '@angular/core';
import { tableData, datatableData } from './reportTableData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReportsdataserviceService {
  allDatatableObject: datatableData[];
  loginData: any;
  selectedlogin: any = [{
    username: 'user1',
    password: 'user1',
    action: 'default1'
  }];
  constructor(private http: HttpClient) {
    this.getLoginData();
   }
  getTables(): Observable<tableData[]> {
    //return this.alltabledataObject;
    return this.http.get<any[]>('api/reportTableData')
  }
  getLoginData(): void {
    this.http.get<any[]>('api/loginContent').subscribe(loginContent => this.loginData = loginContent)
  }
  getDataTables(): Observable<tableData[]> {
    return this.http.get<any[]>('api/dataTableData')
    
    // let copyArray;
    // this.http.get<any[]>('api/dataTableData').subscribe(dataTableData => {
    //   this.allDatatableObject = dataTableData;
    //   copyArray = Object.assign([], this.allDatatableObject);
    // })
    // return copyArray.splice((index - 1) * 4, 4);
  }
  checkvalidLogin(data: any): any {
    this.selectedlogin = this.loginData.filter(item => item.username == data.username && item.password == data.password)
    return this.selectedlogin;
  }
}
