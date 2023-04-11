import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ListOfferUserComponent } from './components/list-offer-user/list-offer-user.component';
import { ListReservationUserComponent } from './components/list-reservation-user/list-reservation-user.component';
import { ContainerUserComponent } from './components/container-user/container-user.component';
import { ShowOfferUserComponent } from './components/show-offer-user/show-offer-user.component';
import { ShowReservationUserComponent } from './components/show-reservation-user/show-reservation-user.component';
import { AddReservationUserComponent } from './components/add-reservation-user/add-reservation-user.component';



@NgModule({
  declarations: [
    ListOfferUserComponent,
    ListReservationUserComponent,
    ContainerUserComponent,
    ShowOfferUserComponent,
    ShowReservationUserComponent,
    AddReservationUserComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardUserModule { }
