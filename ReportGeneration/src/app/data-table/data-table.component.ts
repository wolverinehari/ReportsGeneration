import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { datatableData } from '../reportTableData';
import {ReportsdataserviceService} from '../reportsdataservice.service';
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
  constructor(private constantdataService: ReportsdataserviceService) {
   
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
    });
  }
 // displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
 // displayColumnHeader = ['reportname','report' ,'datasetname', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
  }
}
