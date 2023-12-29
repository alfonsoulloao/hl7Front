import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { environment } from 'src/environments/environments';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login( fromData: LoginForm ){

      console.log("valor de service "+  JSON.stringify(fromData));

      return this.http.post(`${ base_url }/auth/login`,fromData)
  }
}
