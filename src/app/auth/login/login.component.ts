import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/login-form.interface';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    correo:['esepulveda', [Validators.required, Validators.email ] ],
    contraseña: ['123456',[ Validators.required ]],
    recuerdame: [false]
  });
    
  constructor(  private router: Router,
                private fb: FormBuilder,
                private loginService: LoginService ) { }

  public formSubmitted = false;

  async login() {
    
    const loginValues: LoginForm = {
      contraseña: this.loginForm.value.contraseña!,
      correo: this.loginForm.value.correo!,
      recuerdame: this.loginForm.value.recuerdame!
    }
       
    
    this.loginService.loginService( loginValues )
      .subscribe( resp =>{
        // respuesta exitosa
        
        if( this.loginForm.get('recuerdame').value){
            console.log("entra al recuerdame true");
            localStorage.setItem( 'email', this.loginForm.get('correo').value )
        }else{
          localStorage.removeItem('email');
          console.log("entra al recuerdame false");

        }

        console.log("redirecciona");
        this.router.navigateByUrl('/dashboard');
        console.log("redirecciona  ================00");

        console.log(resp);
      }, (err)=>{
        // Arroja error con animacion 
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.message
        });
      });
  }



}
