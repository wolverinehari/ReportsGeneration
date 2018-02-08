import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { InputBoxComponent } from './input-box/input-box.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputBoxComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
