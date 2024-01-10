import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environments';


const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  constructor( private http: HttpClient ) { }

  obtenerPaises(){
    return this.http.get(`${ base_url }/inicio/paises`)
                .pipe(
                  tap( (res : any ) => {
                    //! modificar localStorage
                    localStorage.setItem('user', res.nombresMedico )
                  })
                )
}

obtenerSexos(){
  return this.http.get(`${ base_url }/inicio/sexoadmin`)
              .pipe(
                tap( (res : any ) => {
                    //! modificar localStorage
                  //localStorage.setItem('user', res.nombresMedico )
                })
              )
}


obtenerComunas(){
  return this.http.get(`${ base_url }/inicio/comunas`)
              .pipe(
                tap( (res : any ) => {
                    //! modificar localStorage
                //  localStorage.setItem('user', res.nombresMedico )
                })
              )
}


obtenerDiagnostico(){
  return this.http.get(`${ base_url }/inicio/diagnosticos`)
              .pipe(
                tap( (res : any ) => {
                    //! modificar localStorage
                //  localStorage.setItem('user', res.nombresMedico )
                })
              )
}


  
}
