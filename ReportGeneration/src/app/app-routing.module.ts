import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import{TabsectionComponent} from './tabsection/tabsection.component';
import{SaasCheckComponent} from './saas-check/saas-check.component';




const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'tabpage/:id', component: TabsectionComponent},
  {path: 'saascheck', component: SaasCheckComponent}
  
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
