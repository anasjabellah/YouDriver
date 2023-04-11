import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpdateUtilisateurComponent } from './components/update-utilisateur/update-utilisateur.component';
import { AddUtilisateurComponent } from './components/add-utilisateur/add-utilisateur.component';
import { ShowUtilisateurComponent } from './components/show-utilisateur/show-utilisateur.component';
import { ListUtilisateurComponent } from './components/list-utilisateur/list-utilisateur.component';
import { ContainerUtilisateurComponent } from './components/container-utilisateur/container-utilisateur.component';



@NgModule({
  declarations: [
    UpdateUtilisateurComponent,
    AddUtilisateurComponent,
    ShowUtilisateurComponent,
    ListUtilisateurComponent,
    ContainerUtilisateurComponent
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
export class UtilisateurModule { }
