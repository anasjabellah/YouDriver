import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { OffresModule } from './offres/offres.module';
import { VehiculesModule } from './vehicules/vehicules.module';
import { RouterOutlet } from '@angular/router';

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OffresModule,
    VehiculesModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
