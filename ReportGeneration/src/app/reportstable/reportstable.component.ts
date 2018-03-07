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
  displayColumnHeader:any[];
  constructor(private constantdataService: ReportsdataserviceService) {
   // this.dataObject = constantdataService.getTables();
   // this.dataSource = new MatTableDataSource<tableData>(this.dataObject);
  }
  ngOnInit() {
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
      this.dataSource = new MatTableDataSource<Element>(mergeArray);
      this.dataSource.paginator = this.paginator;
    });
  }
  tableContentStatusChange(data:any){
  }
  //displayColumnHeader = ['reportname','readonly','report' ,'datasetname', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}