import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports:[ 
    PagesComponent
  ]
})
export class PagesModule { }
