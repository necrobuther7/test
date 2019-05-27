import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { pqrs } from '../components/interface/pqrs.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarPqrsService {

  private apiUrl = 'http://54.224.238.170:8080/pqr';
 
    constructor(private httpClient: HttpClient) {  }
 
    ConsultarPqrs():Observable<pqrs[]>{
      return this.httpClient.get<pqrs[]>(this.apiUrl + '/consultar');
    }
 
    ConsultaPqrs(id){
      return this.httpClient.get<pqrs[]>(this.apiUrl + '/consultar/' + id);
    }

    ActualizarPqrs(id, pqrs):Observable<pqrs[]>{
      return this.httpClient.put<pqrs[]>(this.apiUrl + '/actualizar' + id, JSON.stringify(pqrs));
    }

    EliminaPqrs(id, pqrs):Observable<pqrs[]>{
      return this.httpClient.delete<pqrs[]>(this.apiUrl + '/borrar' + id);
    }
}
