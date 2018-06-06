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
  selectedTable:any;
  selectTabValue:string;
  selectedDataSet:any;
  constructor(private reportsdataserviceService:ReportsdataserviceService, private route: ActivatedRoute) { }
  ngOnInit() {
    let selectedreport=this.route.snapshot.paramMap.get('id');
    this.reportsdataserviceService.getLandingTable().subscribe(dataobj =>{
      this.selectedTable=dataobj.filter(item=>item.report==selectedreport)
      this.selectedTable=this.selectedTable[0]; 
      this.indexVal=Object.keys(this.selectedTable.datasetname);//this.selectedTable.datasetname[0];
      this.selectTabValue=this.indexVal[0];
      this.selectedDataSet=this.selectedTable.datasetname[ this.selectTabValue];
    });
  }
  tablick(argindexVal,isreportTable):void{
    this.isreportTable=isreportTable;
    this.selectTabValue=argindexVal;
    this.selectedDataSet=this.selectedTable.datasetname[ this.selectTabValue];
  }
}
