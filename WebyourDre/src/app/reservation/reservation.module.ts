import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContainerReservationComponent } from './components/container-reservation/container-reservation.component';
import { ListReservationComponent } from './components/list-reservation/list-reservation.component';
import { ShowReservationComponent } from './components/show-reservation/show-reservation.component';
import { ListOfferReservationComponent } from './components/list-offer-reservation/list-offer-reservation.component';



@NgModule({
  declarations: [
    ContainerReservationComponent,
    ListReservationComponent,
    ShowReservationComponent,
    ListOfferReservationComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ReservationModule { }
