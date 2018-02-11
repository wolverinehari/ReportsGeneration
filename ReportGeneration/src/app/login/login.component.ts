import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'
import {ReportsdataserviceService} from '../reportsdataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private reportsdataserviceService:ReportsdataserviceService) { }
  logindata:any={
    username:'',
    password:''
  }
  isError:boolean=false;
  ngOnInit() {
  }
  loginData():void{
    let logincheckdata=this.reportsdataserviceService.checkvalidLogin(this.logindata)
    if(logincheckdata.length>0){
      this.router.navigate(['/landingpage']);
      this.isError=false;
    }else{
      this.isError=true;
    }
  // 
  }
  valuechange(data){
    Object.getOwnPropertyNames(data).forEach(item=>{
        this.logindata[item]=data[item];
    })
 }
}