import { Component, OnInit } from '@angular/core';
import {ReportsdataserviceService} from '../reportsdataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private reportsdataserviceService:ReportsdataserviceService) { }
  selectedlogindata=this.reportsdataserviceService.selectedlogin[0];

  ngOnInit() {
  }

}
