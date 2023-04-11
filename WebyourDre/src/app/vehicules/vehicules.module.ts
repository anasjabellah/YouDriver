import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculesComponent } from './components/list-vehicules/list-vehicules.component';
import { ShowVehiculesComponent } from './components/show-vehicules/show-vehicules.component';
import { UpdateVehiculesComponent } from './components/update-vehicules/update-vehicules.component';
import { VehiculeContainerComponent } from './components/vehicule-container/vehicule-container.component';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehiculesComponent } from './components/add-vehicules/add-vehicules.component';



@NgModule({
  declarations: [
    ListVehiculesComponent,
    ShowVehiculesComponent,
    UpdateVehiculesComponent,
    AddVehiculesComponent,
    VehiculeContainerComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class VehiculesModule { }
