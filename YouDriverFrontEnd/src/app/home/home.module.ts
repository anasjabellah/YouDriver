import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LayoutHomeComponent } from '../shared/components/layout-home/layout-home.component';
import { LayoutHomeFooterComponent } from '../shared/components/layout-home-footer/layout-home-footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SignInComponent,
    SignUpComponent,
    LayoutHomeComponent,
    LayoutHomeFooterComponent 
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
