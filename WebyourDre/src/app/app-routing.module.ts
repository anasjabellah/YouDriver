import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShowOfferComponent } from './offres/components/show-offer/show-offer.component';
import { OfferContainerComponent } from './offres/components/offer-container/offer-container.component';
import { AddOfferComponent } from './offres/components/add-offer/add-offer.component';
import { UpdateOfferComponent } from './offres/components/update-offer/update-offer.component';
import { ListsOffersComponent } from './offres/components/lists-offers/lists-offers.component';
import { VehiculeContainerComponent } from './vehicules/components/vehicule-container/vehicule-container.component';
import { ListVehiculesComponent } from './vehicules/components/list-vehicules/list-vehicules.component';
import { AddVehiculesComponent } from './vehicules/components/add-vehicules/add-vehicules.component';
import { ShowVehiculesComponent } from './vehicules/components/show-vehicules/show-vehicules.component';
import { UpdateVehiculesComponent } from './vehicules/components/update-vehicules/update-vehicules.component';
import { RolesContainerComponent } from './roles/components/roles-container/roles-container.component';
import { ListRolesComponent } from './roles/components/list-roles/list-roles.component';
import { AddRolesComponent } from './roles/components/add-roles/add-roles.component';
import { ShowRolesComponent } from './roles/components/show-roles/show-roles.component';
import { UpdateRolesComponent } from './roles/components/update-roles/update-roles.component';
import { ContainerUtilisateurComponent } from './utilisateur/components/container-utilisateur/container-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/components/list-utilisateur/list-utilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/components/add-utilisateur/add-utilisateur.component';
import { ShowUtilisateurComponent } from './utilisateur/components/show-utilisateur/show-utilisateur.component';
import { UpdateUtilisateurComponent } from './utilisateur/components/update-utilisateur/update-utilisateur.component';
import { ListReservationComponent } from './reservation/components/list-reservation/list-reservation.component';
import { ShowReservationComponent } from './reservation/components/show-reservation/show-reservation.component';
import { HomeComponent } from './home/components/home/home.component';
import { ListOfferReservationComponent } from './reservation/components/list-offer-reservation/list-offer-reservation.component';
import { ContainerUserComponent } from './dashboardUser/components/container-user/container-user.component';
import { ListOfferUserComponent } from './dashboardUser/components/list-offer-user/list-offer-user.component';
import { ListReservationUserComponent } from './dashboardUser/components/list-reservation-user/list-reservation-user.component';
import { ShowOfferUserComponent } from './dashboardUser/components/show-offer-user/show-offer-user.component';
import { ShowReservationUserComponent } from './dashboardUser/components/show-reservation-user/show-reservation-user.component';


const routes: Routes = [

  
  { path: 'offer' , component: OfferContainerComponent , 
  children:[
    {path: '' , component: ListsOffersComponent },
    {path: 'add' , component: AddOfferComponent  },
    {path: 'show/:id' , component: ShowOfferComponent  },
    {path: 'update/:id' , component: UpdateOfferComponent  }
    ]  
  },
  {
    path: 'vehicule' , component: VehiculeContainerComponent ,
    children:[
      {path: '' , component: ListVehiculesComponent},
      {path: 'add' , component: AddVehiculesComponent},
      {path: 'show/:id' , component: ShowVehiculesComponent},
      {path: 'update/:id' , component: UpdateVehiculesComponent},
    ]
  },

  {
    path: 'role' , component: RolesContainerComponent ,
    children:[
      {path: '' , component: ListRolesComponent},
      {path: 'add' , component: AddRolesComponent},
      {path: 'show/:id' , component: ShowRolesComponent},
      {path: 'update/:id' , component: UpdateRolesComponent},
    ]
  },
  
  {
    path: 'utilisateur' , component: ContainerUtilisateurComponent ,
    children:[
      {path: '' , component: ListUtilisateurComponent},
      {path: 'add' , component: AddUtilisateurComponent},
      {path: 'show/:id' , component: ShowUtilisateurComponent},
      {path: 'update/:id' , component: UpdateUtilisateurComponent},
    ]
  },

  {
    path: 'reservation' , component: RolesContainerComponent ,
    children:[
      { path: '' , component: ListReservationComponent },
      { path: 'offer/:id' , component: ListOfferReservationComponent },
      { path: 'show/:id' , component: ShowReservationComponent },
    ]
  },

  {
    path: 'dashboard' , component: ContainerUserComponent ,
    children:[
      {path: 'offer' , component: ListOfferUserComponent},
      {path: 'offer/show/:id' , component: ShowOfferUserComponent},
      {path: 'reservation' , component: ListReservationUserComponent},
      {path: 'reservation/show/:id' , component: ShowReservationUserComponent},
    ]
  },
  
  {  path: 'home' , component: HomeComponent   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
