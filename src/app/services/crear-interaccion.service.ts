import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interaccion } from '../components/interface/interaccion.interface';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
}),
  reponseType: 'json' as any
}

@Injectable({
providedIn: 'root'
})
export class CrearinteraccionService {
 
  private apiUrl = 'http://54.224.238.170:8080/pqr';
 
  constructor( private HttpClient: HttpClient) { }
 
   nuevaInteraccion(Interaccion:interaccion){
    const  body= JSON.stringify(Interaccion);
    }  
    
    /** Post: add a new pqrs to the database */
    CrearInteraccion(id, interaccion):Observable<interaccion[]>{
      return this.HttpClient.post<interaccion[]>(this.apiUrl + '/crear/' + id, JSON.stringify(interaccion));
  }
    //guardar()
}