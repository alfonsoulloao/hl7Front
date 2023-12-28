import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';
// componentes
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
