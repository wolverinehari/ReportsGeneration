import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { InputBoxComponent } from './input-box/input-box.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DemoMaterialModule } from './app.materialmodule';
import { ReportstableComponent } from './reportstable/reportstable.component';
import { TabsectionComponent } from './tabsection/tabsection.component';
import {ReportsdataserviceService} from './reportsdataservice.service';
import { HeaderComponent } from './header/header.component';
import { LoginDataService } from './login-data.service';
import { DataTableComponent } from './data-table/data-table.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import {Dialogcontent} from './edit-popup/dialogcontent';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LocaldatasericeService }  from './localdataserice.service';
import { AuthService } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputBoxComponent,
    LandingpageComponent,
    ReportstableComponent,
    TabsectionComponent,
    HeaderComponent,
    DataTableComponent,
    EditPopupComponent,
    Dialogcontent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      LocaldatasericeService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [EditPopupComponent,Dialogcontent],
  providers: [ReportsdataserviceService, LoginDataService, LocaldatasericeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
