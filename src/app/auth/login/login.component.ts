import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/interfaces/login-form.interface';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    correo:['alfonsoulloa.o@gmail.com', [Validators.required, Validators.email ] ],
    contraseña: ['test',[ Validators.required ]],
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
       
    
    this.loginService.login( loginValues )
      .subscribe( resp =>{
        console.log("Entra en la respuesta");
      }, (err)=>{

        console.log("Entra en el error ");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.msg
        });
      });

      

    // this.router.navigateByUrl('/');
  }



}
