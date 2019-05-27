import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { interaccion } from '../components/interface/interaccion.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrarInteraccionService {

  private apiUrl = 'http://54.224.238.170:8080/pqr';
 
    constructor(private httpClient: HttpClient) {  }
 
    ConsultarInteraccion():Observable<interaccion[]>{
        return this.httpClient.get<interaccion[]>(this.apiUrl + '/consultar');
    }

    ConsultarInteraccionId(id):Observable<interaccion[]>{
      return this.httpClient.get<interaccion[]>(this.apiUrl + '/consultar' + id);
  }

  ActualizarInteraccion(id, interaccion):Observable<interaccion[]>{
    return this.httpClient.put<interaccion[]>(this.apiUrl + '/actualizar' + id, JSON.stringify(interaccion));
  }

  EliminaInteraccion(id):Observable<interaccion[]>{
    return this.httpClient.delete<interaccion[]>(this.apiUrl + '/borrar' + id);
  }
 
    // ConsultaInteraccionId(){
    //     this.httpClient.get(this.apiUrl + '/consultar/1').subscribe((res)=>{
    //         console.log(res);
    //     });
    // }
  }