import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { InputBoxComponent } from './input-box/input-box.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DemoMaterialModule } from './app.materialmodule';
import { ReportstableComponent } from './reportstable/reportstable.component';
import { TabsectionComponent } from './tabsection/tabsection.component';
import {ReportsdataserviceService} from './reportsdataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputBoxComponent,
    LandingpageComponent,
    ReportstableComponent,
    TabsectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ReportsdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
