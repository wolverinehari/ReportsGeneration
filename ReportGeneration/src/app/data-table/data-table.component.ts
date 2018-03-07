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
          //mergeArray[index].push({key:'Readonly',value:'true'});
      })
      this.displayColumnHeader = Object.keys(dataobj[0]).map(key => (key));
      //this.displayColumnHeader.splice(1,0,'Readonly')
      this.dataObject=mergeArray[0];
      //let copyArray = Object.assign([], dataobj);
      //this.dataObject = copyArray.splice((this.indexVal - 1) * 4, 4);
      this.dataSource = new MatTableDataSource<datatableData>(mergeArray);
      this.dataSource.paginator = this.paginator;
    });
  }
 // displayColumnHeader = ['id','Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'comments'];
 // displayColumnHeader = ['reportname','report' ,'datasetname', 'comments'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
  }
}
