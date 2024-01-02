import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RevisarComponent } from './revisar/revisar.component';



const routes: Routes = [
  {
    path:'dashboard',
    component: PagesComponent,
    children:[
        { path: '', component: DashboardComponent,data: { titulo: 'Dashboard' }  },
        { path: 'inicio', component: InicioComponent,data: { titulo: 'Inicio' }},    
        { path: 'revisar', component: RevisarComponent,data: { titulo: 'Revisar' }},    
        { path: 'account-settings', component: AccountSettingsComponent,data: { titulo: 'Account-Settings' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
