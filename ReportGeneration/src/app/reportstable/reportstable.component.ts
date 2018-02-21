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
  dataObject: any[];
  dataSource:any;
  constructor(private constantdataService: ReportsdataserviceService) {
   // this.dataObject = constantdataService.getTables();
   // this.dataSource = new MatTableDataSource<tableData>(this.dataObject);
  }
  ngOnInit() {
    this.constantdataService.getTables().subscribe(dataobj =>{
      this.dataObject=dataobj; 
      this.dataSource = new MatTableDataSource<Element>(this.dataObject);
      this.dataSource.paginator = this.paginator;
    });
  }
  tableContentStatusChange(data:any){
  }
  displayColumnHeader = ['reportname','readonly','report' ,'datasetname', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}