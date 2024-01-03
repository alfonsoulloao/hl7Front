import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [  
  // path: '/login' AuthRoutingModule
  // path: '/dashboard' PagesRoutingModule
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  
  //inicia en login
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
