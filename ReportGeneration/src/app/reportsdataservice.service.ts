import { Injectable } from '@angular/core';
// import { tableData, datatableData } from './reportTableData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/xml' })
};

@Injectable()

export class ReportsdataserviceService {
  //allDatatableObject: datatableData[];
  loginData: any;
  selectedlogin: any = [{
    username: 'user1',
    password: 'user1',
    action: 'HSD#3,HSD#70'
  }];

  constructor(private http: HttpClient) {
    this.getLoginData();
    // this.getTables().subscribe(dataobj =>{console.log(dataobj)})
  }
  getTables(pageNumber): Observable<any[]> {
    let xmlString, URL;
    xmlString = '<stp><parameters><selFilter>' + pageNumber + '</selFilter></parameters></stp>';
    URL = 'http://zltstesasweb01.phs.org:7980/SASBIWS/rest/storedProcesses/Web/HSD3_HSD_PCP_POC/dataTargets/_WEBOUT'
    return this.http.post<any[]>(URL, xmlString, httpOptions);
    // return this.http.get<any[]>('api/reportTableData')
  }
  getLandingTable(): Observable<any[]> {
    //return this.alltabledataObject;
    return this.http.get<any[]>('api/reportLandingData')
  }
  getLoginData(): void {
    this.http.get<any[]>('api/loginContent').subscribe(loginContent => this.loginData = loginContent)
  }
  getDataTables(pageNumber): Observable<any[]> {
    let xmlString, URL;
    xmlString = '<stp><parameters><selFilter>' + pageNumber + '</selFilter></parameters></stp>';
    URL = 'http://zltstesasweb01.phs.org:7980/SASBIWS/rest/storedProcesses/Web/HSD3_PROVIDER_PROFILE_FINAL_POC/dataTargets/_WEBOUT'
    return this.http.post<any[]>(URL, xmlString, httpOptions);
    // return this.http.get<any[]>('api/dataTableData')

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
