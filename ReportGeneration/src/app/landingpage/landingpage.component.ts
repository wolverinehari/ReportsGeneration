import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { ReportsdataserviceService } from '../reportsdataservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  host: { 'class': 'landingpage' },
  encapsulation: ViewEncapsulation.None
})
export class LandingpageComponent implements OnInit {
  constructor(private router: Router, private reportsdataserviceService: ReportsdataserviceService) { }
  selectedlogindata: any;
  reportTableData: any;
  resetObject: any;
  searchText:String;
  selectText:String="NONE";
  ngOnInit() {
    this.selectedlogindata = this.reportsdataserviceService.selectedlogin[0];
    this.reportsdataserviceService.getLandingTable().subscribe(dataobj => {
      this.reportTableData = dataobj;
      this.resetObject = dataobj
    });
  }
  navigationCheck(report): void {
    this.router.navigate(['/tabpage', report]);
    //this.router.navigate(['/tabpage/:'+report]);
  }
  clearFilter():void{
     this.searchText='';
     this.selectText='NONE';
     this.reportTableData=JSON.parse(JSON.stringify(this.resetObject))
  }
  sortChange(value): void {
    console.log(value)
    switch (value) {
      case 'SRTNO':
        this.reportTableData.sort((a, b) => a.report.localeCompare(b.report));
        break;
      case 'SRTNAME':
        this.reportTableData.sort((a, b) => a.reportname.localeCompare(b.reportname));
        break;
      case 'NONE':
        this.reportTableData=JSON.parse(JSON.stringify(this.resetObject))
        break;
    }
  }
}
