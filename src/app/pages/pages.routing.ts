import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [
  {
    path:'dashboard',
    component: PagesComponent,
    children:[
        { path: '', component: DashboardComponent  },
        { path: 'inicio', component: InicioComponent},    
        { path: 'account-settings', component: AccountSettingsComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
