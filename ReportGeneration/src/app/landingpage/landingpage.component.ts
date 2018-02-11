import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router'
import {ReportsdataserviceService} from '../reportsdataservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  host: {'class': 'landingpage'},
  encapsulation:ViewEncapsulation.None
})
export class LandingpageComponent implements OnInit {

  constructor(private router:Router,private reportsdataserviceService:ReportsdataserviceService) { }
  selectedlogindata=this.reportsdataserviceService.selectedlogin[0];
  ngOnInit() {
  }
  navigationCheck():void{
   this.router.navigate(['/tabpage']);
 }

}
