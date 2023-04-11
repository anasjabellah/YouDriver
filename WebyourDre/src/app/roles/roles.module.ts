import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RolesContainerComponent } from './components/roles-container/roles-container.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { UpdateRolesComponent } from './components/update-roles/update-roles.component';



@NgModule({
  declarations: [
    RolesContainerComponent,
    AddRolesComponent,
    ShowRolesComponent,
    ListRolesComponent,
    UpdateRolesComponent
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
export class RolesModule { }
