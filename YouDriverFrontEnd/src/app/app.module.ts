import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { OffresModule } from './offres/offres.module';
import { ShowVehiculesComponent } from './vehicules/components/show-vehicules/show-vehicules.component';
import { AddVehiculesComponent } from './vehicules/components/add-vehicules/add-vehicules.component';
import { ListVehiculesComponent } from './vehicules/components/list-vehicules/list-vehicules.component';
import { UpdateVehiculesComponent } from './vehicules/components/update-vehicules/update-vehicules.component';
import { VehiculesModule } from './vehicules/vehicules.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowVehiculesComponent,
    AddVehiculesComponent,
    ListVehiculesComponent,
    UpdateVehiculesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OffresModule,
    VehiculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
