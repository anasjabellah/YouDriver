import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowVehiculesComponent } from './components/show-vehicules/show-vehicules.component';
import { AddVehiculesComponent } from './components/add-vehicules/add-vehicules.component';
import { ListVehiculesComponent } from './components/list-vehicules/list-vehicules.component';
import { UpdateVehiculesComponent } from './components/update-vehicules/update-vehicules.component';

@NgModule({
  declarations: [
    ShowVehiculesComponent,
    AddVehiculesComponent,
    ListVehiculesComponent,
    UpdateVehiculesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class VehiculesModule { }
