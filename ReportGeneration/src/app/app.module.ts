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
import { DownloadtableService } from './downloadtable.service';
import { SubtabSectionComponent } from './subtab-section/subtab-section.component';
import { SaasCheckComponent } from './saas-check/saas-check.component';
import { FilterPipe} from './filter.pipe';
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
    Dialogcontent,
    SubtabSectionComponent,
    SaasCheckComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      LocaldatasericeService, { dataEncapsulation: false,passThruUnknownUrl: true }
    )
  ],
  entryComponents: [EditPopupComponent,Dialogcontent],
  providers: [ReportsdataserviceService, LoginDataService, LocaldatasericeService,AuthService, DownloadtableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
