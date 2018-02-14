import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabsection',
  templateUrl: './tabsection.component.html',
  styleUrls: ['./tabsection.component.css']
})
export class TabsectionComponent implements OnInit {
  isreportTable:boolean=true;
  indexVal:number;
  constructor() { }
  ngOnInit() {
  }
  tablick(id):void{
    switch(id){
      case 1:
        this.isreportTable=true
      break;
      case 2:
        this.isreportTable=false;
        this.indexVal=1;
      break;
      case 3:
        this.isreportTable=false;
        this.indexVal=2;
      break;
      case 4:
        this.isreportTable=false;
        this.indexVal=3;
      break;
    }
  }
}
