import { Component, OnInit } from '@angular/core';
import {ReportsdataserviceService} from '../reportsdataservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tabsection',
  templateUrl: './tabsection.component.html',
  styleUrls: ['./tabsection.component.css']
})
export class TabsectionComponent implements OnInit {
  isreportTable:boolean=true;
  indexVal:any=0;
  dataObject:any={
    indexVal:0
  }
  reportTableData:any;
  selectedreport:any;
  selectedTable:any;
  constructor(private reportsdataserviceService:ReportsdataserviceService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.selectedreport = this.route.snapshot.paramMap.get('id');
    this.reportsdataserviceService.getLandingTable().subscribe(dataobj =>{
      this.reportTableData=dataobj;
      this.selectedTable=this.reportTableData.filter(item=>item.report==this.selectedreport)
      this.selectedTable=this.selectedTable[0]; 
      this.indexVal=this.selectedTable.datasetname[0];
    });
  }
  tablick(id,argindexVal,isreportTable):void{
    // switch(id+1){
    //   case 1:
    //     this.isreportTable=true
    //     this.indexVal=0;
    //   break;
    //   case 2:
    //     this.isreportTable=false;
    //     this.indexVal=1;
    //   break;
    //   case 3:
    //     this.isreportTable=false;
    //     this.indexVal=2;
    //   break;
    //   case 4:
    //     this.isreportTable=false;
    //     this.indexVal=3;
    //   break;
    // }
    this.isreportTable=isreportTable;
    this.indexVal=argindexVal;
    this.dataObject.indexVal=this.indexVal;
    console.log(id,this.isreportTable,this.indexVal)
  }
}
