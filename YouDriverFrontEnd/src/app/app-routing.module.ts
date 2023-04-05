import { NgModule } from '@angular/core';
import { PreloadAllModules , RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home/components/home-page/home-page.component';
import { AddOffersComponent } from './offres/components/add-offers/add-offers.component';
import { ListOffersComponent } from './offres/components/list-offers/list-offers.component';
import { ShowOfferComponent } from './offres/components/show-offer/show-offer.component';
import { UpdateOfferComponent } from './offres/components/update-offer/update-offer.component';
import { AddVehiculesComponent } from './vehicules/components/add-vehicules/add-vehicules.component';
import { ListVehiculesComponent } from './vehicules/components/list-vehicules/list-vehicules.component';
import { ShowVehiculesComponent } from './vehicules/components/show-vehicules/show-vehicules.component';


const routes: Routes = [

  {path: 'offer/add' , component: AddOffersComponent  },
  {path: 'offer/show' , component: ShowOfferComponent  },
  {path: 'offer/update' , component: UpdateOfferComponent  },
  {path: 'offers' , component: ListOffersComponent  },


  // vehicules
  {path: 'compagnie' , component: ListVehiculesComponent},
  {path: 'compagnie/vehicule/:id' , component: ShowVehiculesComponent},
  {path: 'compagnie/:id/vehicule/save' , component: AddVehiculesComponent},


  {path: 'home' , component: HomePageComponent  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
