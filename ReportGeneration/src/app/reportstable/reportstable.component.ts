import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { tableData } from '../reportTableData';
import {ReportsdataserviceService} from '../reportsdataservice.service';

@Component({
  selector: 'app-reportstable',
  templateUrl: './reportstable.component.html',
  styleUrls: ['./reportstable.component.css']
})
export class ReportstableComponent implements OnInit {
 dataObject: tableData[];
  dataSource:any;
  constructor(constantdataService: ReportsdataserviceService) {
    this.dataObject = constantdataService.getTables();
    this.dataSource = new MatTableDataSource<tableData>(this.dataObject);
  }
  ngOnInit() {
  }
  tableContentStatusChange(data:any){
  }
  displayColumnHeader = ['id','readonly' ,'Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
