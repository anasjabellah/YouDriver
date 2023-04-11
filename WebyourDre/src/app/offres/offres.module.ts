import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOfferComponent } from './components/show-offer/show-offer.component';
import { OfferContainerComponent } from './components/offer-container/offer-container.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { UpdateOfferComponent } from './components/update-offer/update-offer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListsOffersComponent } from './components/lists-offers/lists-offers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowOfferComponent,
    OfferContainerComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    ListsOffersComponent,
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
export class OffresModule { }
