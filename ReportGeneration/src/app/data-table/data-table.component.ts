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
  dataObject: datatableData[];
  dataSource:any;
  constructor(constantdataService: ReportsdataserviceService) {
    this.dataObject = constantdataService.getDataTables(this.indexVal);
    this.dataSource = new MatTableDataSource<datatableData>(this.dataObject);
  }
  ngOnInit() {
  }
  displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
