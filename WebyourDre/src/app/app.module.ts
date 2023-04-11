import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresModule } from './offres/offres.module';
import { ReservationModule } from './reservation/reservation.module';
import { RolesModule } from './roles/roles.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { VehiculesModule } from './vehicules/vehicules.module';
import { HomeComponent } from './home/components/home/home.component';
import { DashboardUserModule } from './dashboardUser/dashboard-user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OffresModule,
    VehiculesModule,
    RouterOutlet,
    RolesModule,
    UtilisateurModule,
    ReservationModule,
    DashboardUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
