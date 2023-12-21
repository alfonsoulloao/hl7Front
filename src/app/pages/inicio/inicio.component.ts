import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  progreso1: number = 40;
  progreso2: number = 40;

  get getprogreso1(){
    return `${ this.progreso1 }%`;
  }

  get getprogreso2(){
    return `${ this.progreso2 }%`;
  }




}
