import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login-form.interface';
import { environment } from 'src/environments/environments';
import { tap } from 'rxjs';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }


  loginService( fromData: LoginForm ){

      return this.http.post(`${ base_url }/auth/login`,fromData)
                  .pipe(
                    tap( (res : any ) => {
                      localStorage.setItem('user', res.nombresMedico )
                    })
                  )
  }




}
