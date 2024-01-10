import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna.interface';
import { Diagnostico } from 'src/app/models/diagnostico.interface';
import { Pais } from 'src/app/models/pais.inteface';
import { Sexo } from 'src/app/models/sexo.interface';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  paisOrigen:Pais[];
  sexo:Sexo[];
  genero:Sexo[];
  comuna:Comuna[];
  diagnosticos:Diagnostico[]

  constructor(private readonly inicioServices: InicioService,
              private router: Router,
              private fb: FormBuilder,) {
                this.ngOnInit()


  }


  ngOnInit() {
    // servicio que obtiene paises y se usa en pais de origen y nacionalidad
    this.inicioServices.obtenerPaises()
      .subscribe( resp =>{
        this.paisOrigen = resp;       
      })


      // servicio que obtiene el sexo 
      this.inicioServices.obtenerSexos()
      .subscribe( resp =>{
        this.sexo = resp; 
        this.genero = resp;        
      })


       // servicio que obtiene las comunas para lugar de nacimiento 
       this.inicioServices.obtenerComunas()
       .subscribe( resp =>{
         this.comuna = resp;        
       })


        // servicio que obtiene las comunas para lugar de nacimiento 
        this.inicioServices.obtenerDiagnostico()
        .subscribe( resp =>{
          this.diagnosticos = resp;        
        })
  }

  public inicioForm = this.fb.group({
    paisOrigen:['pais de origen', [Validators.required ] ],
    nacionalidad:['pais de origen', [Validators.required ] ],
    sexoBiologico:['pais de origen', [Validators.required ] ],
    lugarNacimiento:['Lugar de nacimiento', [Validators.required ] ],
    diagnosticos:['Lugar de nacimiento', [Validators.required ] ],
    genero:['Lugar de nacimiento', [Validators.required ] ],
   
  });  





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
