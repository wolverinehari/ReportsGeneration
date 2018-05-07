import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {ReportsdataserviceService} from '../reportsdataservice.service';
import {DownloadtableService} from '../downloadtable.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() indexVal;
  dataObject:any[];
  dataSource:any;
  displayColumnHeader:any;
  csvHeader:any[];

  constructor(private constantdataService: ReportsdataserviceService,private DownloadtableService: DownloadtableService) {
   
  }
  ngOnInit() {
    this.constantdataService.getDataTables().subscribe(dataobj =>{
      let mergeArray =[]
      dataobj.forEach(function(item,index){
          mergeArray.push(Object.keys(item).map(key => ({ key, value: item[key] })));
      })
      this.displayColumnHeader = Object.keys(dataobj[0]).map(key => (key));
      this.dataObject=mergeArray[0];
      this.dataSource = new MatTableDataSource<any>(dataobj);
      this.dataSource.paginator = this.paginator;
      this.dataObject.forEach((element,index) => {
        this.csvHeader.push(element.key);
      });
      this.DownloadtableService.setCSVHeader(this.csvHeader);
    });
  }
  downloadCSV(){
    this.DownloadtableService.downloadCSV(this.dataSource.data,'dataTableCSV')
  }
  downloadExcel(){
    this.DownloadtableService.exportAsExcelFile(this.dataSource.data,'dataTableExcel');
  }
 // displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
 // displayColumnHeader = ['reportname','report' ,'datasetname', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
  }
}
