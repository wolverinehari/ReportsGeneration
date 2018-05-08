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
      let csvHeader:Array<string>=[];
      this.dataObject.forEach((element,index) => {
        csvHeader.push(element.key);
      });
      this.DownloadtableService.setCSVHeader(csvHeader);
    }); 
  }
  downloadCSV(){
    this.DownloadtableService.downloadCSV(this.dataSource.data,this.indexVal+'_dataTableCSV')
  }
  downloadExcel(){
    this.DownloadtableService.exportAsExcelFile(this.dataSource.data,this.indexVal+'_dataTableExcel');
  }
 // displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
 // displayColumnHeader = ['reportname','report' ,'datasetname', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
  }
}
