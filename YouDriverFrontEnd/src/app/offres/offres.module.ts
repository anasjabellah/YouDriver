import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { ShowOfferComponent } from './components/show-offer/show-offer.component';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { AddOffersComponent } from './components/add-offers/add-offers.component';
import { ListOffersComponent } from './components/list-offers/list-offers.component';
import { OfferContainerComponent } from './components/offer-container/offer-container.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    ListOffersComponent,
    AddOffersComponent,
    ShowOfferComponent,
    UpdateOfferComponent,
    OfferContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterOutlet
  ]
})
export class OffresModule { }
