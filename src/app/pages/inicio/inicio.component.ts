import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  mostrarAlerta = false;
  datos: any = {}; // Objeto para almacenar datos del formulario

  guardarDatos() {
    // Lógica para guardar datos
    this.mostrarAlerta = true; // Muestra alerta después de guardar
  }

  limpiarFormulario() {
    // Lógica para limpiar el formulario
    this.datos = {}; // Reinicia los datos del formulario
    this.mostrarAlerta = false; // Oculta la alerta
  }

}
