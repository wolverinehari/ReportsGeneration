import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-subtab-section',
  templateUrl: './subtab-section.component.html',
  styleUrls: ['./subtab-section.component.css']
})
export class SubtabSectionComponent implements OnInit {
  @Input() tabData:any;
  isreportTable:boolean=true;
  selectedItem:any=0;
  dataObject:any={
    indexVal:0
  }
  constructor() { }

  ngOnInit() {
    this.selectedItem=this.tabData[0]
  }
tablick(argindexVal,isreportTable):void{
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
    // this.isreportTable=isreportTable;
    // this.indexVal=argindexVal;
    // this.dataObject.indexVal=this.indexVal;
     this.isreportTable=isreportTable;
     this.selectedItem=argindexVal;
  }
}
