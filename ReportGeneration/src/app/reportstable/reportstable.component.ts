import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { tableData } from '../reportTableData';
import {ReportsdataserviceService} from '../reportsdataservice.service';
import {DownloadtableService} from '../downloadtable.service';

@Component({
  selector: 'app-reportstable',
  templateUrl: './reportstable.component.html',
  styleUrls: ['./reportstable.component.css']
})
export class ReportstableComponent implements OnInit {
  @Input() indexVal;
  dataObject: any[];
  dataSource:any;
  displayColumnHeader:any[];
  pageSize:number=1;
  pageOptions:Array<number>=[];
  PageNumberList:Array<number>=[1,2,3,4];
  previousVal:number=1;
  constructor(private constantdataService: ReportsdataserviceService,private DownloadtableService: DownloadtableService) {
   // this.dataObject = constantdataService.getTables();
   // this.dataSource = new MatTableDataSource<tableData>(this.dataObject);
   this.constantdataService.getTables(this.previousVal).subscribe(dataobj =>{
      this.setTableData(dataobj)
    });
  }
  setTableData(dataobj){
     dataobj; 
      let mergeArray =[]
      dataobj=dataobj['response'];
      dataobj.forEach(function(item,index){
          mergeArray.push(Object.keys(item).map(key => ({ key, value: item[key] })));
          mergeArray[index].push({key:'Readonly',value:'true','index':index});
           mergeArray[index].push({key:'comments',value:' ','index':index});
      })
      this.displayColumnHeader = Object.keys(dataobj[0]).map(key => (key));
      this.displayColumnHeader.splice(1,0,'Readonly')
      this.displayColumnHeader.splice((this.displayColumnHeader.length),0,'comments')
      this.dataObject=mergeArray[0];
      this.dataSource = new MatTableDataSource<any>(dataobj);
      this.dataSource.paginator = this.paginator;
      this.pageSize=dataobj.length
      this.pageOptions=[1,2,3]
      let csvHeader:Array<String>=[];
      this.dataObject.forEach((element,index) => {
        csvHeader.push(element.key);
      });
      this.DownloadtableService.setCSVHeader(csvHeader);
  }
  ngOnInit() {
  }
  downloadCSV(){
    this.DownloadtableService.downloadCSV(this.dataSource.data,this.indexVal+'_reportCSV')
  }
  downloadExcel(){
    this.DownloadtableService.exportAsExcelFile(this.dataSource.data,this.indexVal+'_reportExcel');
  }
  tableContentStatusChange(data:any){
  }
  onChangePage(event):void{
    let newVal = event.target.value;
    if(this.previousVal!=newVal){
       this.previousVal=newVal;
       this.constantdataService.getTables(this.previousVal).subscribe(dataobj =>{
        this.setTableData(dataobj)
      });
    }
    
  }
  //displayColumnHeader = ['reportname','readonly','report' ,'datasetname', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}