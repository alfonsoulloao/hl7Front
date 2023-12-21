import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// componentes
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[ 
    PagesComponent
  ]
})
export class PagesModule { }
