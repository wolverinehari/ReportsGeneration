import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'
import {ReportsdataserviceService} from '../reportsdataservice.service';
import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private reportsdataserviceService:ReportsdataserviceService,public auth: AuthService) { }
  logindata:any={
    username:'',
    password:''
  }
  isError:boolean=false;
  ngOnInit() {
  }
  loginData():void{
   //this.auth.login(this.logindata.username, this.logindata.password);
    let logincheckdata=this.reportsdataserviceService.checkvalidLogin(this.logindata)
    if(logincheckdata.length>0){
      this.router.navigate(['/landingpage']);
      this.isError=false;
    }else{
      this.isError=true;
    }
  }
  keyDownFunction(event) {
  if(event.keyCode == 13) {
      this.loginData();
  }
 }
  valuechange(data){
    Object.getOwnPropertyNames(data).forEach(item=>{
        this.logindata[item]=data[item];
    })
 }
}