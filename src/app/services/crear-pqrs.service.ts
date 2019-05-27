import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pqrs } from '../components/interface/pqrs.interface';
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
export class CrearPqrsService {

  private apiUrl = 'http://54.224.238.170:8080/pqr';
 
  constructor( private HttpClient: HttpClient) { }
 
   nuevaPqrs(Pqrs:pqrs){
    const  body= JSON.stringify(Pqrs);
    }  
    
    /** Post: add a new pqrs to the database */
    CrearPqrs(id, pqrs):Observable<pqrs[]>{
      return this.HttpClient.post<pqrs[]>(this.apiUrl + '/crear/' + id, JSON.stringify(pqrs));
  }
    //guardar()
}
