import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { tableData } from '../reportTableData';
import {ReportsdataserviceService} from '../reportsdataservice.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-reportstable',
  templateUrl: './reportstable.component.html',
  styleUrls: ['./reportstable.component.css']
})
export class ReportstableComponent implements OnInit {
  dataObject: any[];
  dataSource:any;
  displayColumnHeader:any[];
  csvOption:any= { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Report',
    useBom: true,
    noDownload: false,
    headers: []
  };
  constructor(private constantdataService: ReportsdataserviceService) {
   // this.dataObject = constantdataService.getTables();
   // this.dataSource = new MatTableDataSource<tableData>(this.dataObject);
   this.constantdataService.getTables().subscribe(dataobj =>{
      dataobj; 
      let mergeArray =[]
      dataobj.forEach(function(item,index){
          mergeArray.push(Object.keys(item).map(key => ({ key, value: item[key] })));
          mergeArray[index].push({key:'Readonly',value:'true','index':index});
      })
      this.displayColumnHeader = Object.keys(dataobj[0]).map(key => (key));
      this.displayColumnHeader.splice(1,0,'Readonly')
      this.dataObject=mergeArray[0];
      this.dataSource = new MatTableDataSource<any>(dataobj);
      this.dataSource.paginator = this.paginator;
      this.dataObject.forEach((element,index) => {
        this.csvOption.headers.push(element.key);
      });
    });
  }
  ngOnInit() {
    
  }
  downloadCSV(){
    new Angular5Csv(this.dataSource.data,'reportCSV', this.csvOption);
  }
  downloadExcel(){
    this.exportAsExcelFile(this.dataSource.data,'reportExcel');
  }
  tableContentStatusChange(data:any){
  }
  //displayColumnHeader = ['reportname','readonly','report' ,'datasetname', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}