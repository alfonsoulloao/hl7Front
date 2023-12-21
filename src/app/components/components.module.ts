import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modulos
import { FormsModule } from '@angular/forms';
// componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';


@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    IncrementadorComponent
  ]
})
export class ComponentsModule { }
