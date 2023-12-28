import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'dashboard', url: '/dashboard' },
        { titulo: 'inicio', url: '/dashboard/inicio' },        
      ]
    },
  ];

  constructor() { }
}
