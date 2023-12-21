import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { AuthRoutingModule } from './auth.routing';
// componentes
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
