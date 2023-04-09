import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderManadgerComponent } from './components/header-manadger/header-manadger.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
    HeaderAdminComponent ,
    HeaderManadgerComponent,
    HeaderuserComponent,
    FooterComponent,
    DashboardAdminComponent,
  ],
  imports: [
    CommonModule     
  ],
  exports : [
    HeaderAdminComponent,
    HeaderManadgerComponent,
    HeaderuserComponent,
    FooterComponent,
    DashboardAdminComponent,
  ]
})
export class SharedModule { }
