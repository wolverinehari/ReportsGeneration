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
  constructor(private constantdataService: ReportsdataserviceService) {
   
  }
  ngOnInit() {
    this.constantdataService.getDataTables().subscribe(dataobj =>{
      let copyArray = Object.assign([], dataobj);
      this.dataObject = copyArray.splice((this.indexVal - 1) * 4, 4);
      this.dataSource = new MatTableDataSource<datatableData>(this.dataObject);
      this.dataSource.paginator = this.paginator;
    });
  }
 // displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
  displayColumnHeader = ['reportname','report' ,'datasetname', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }
}
