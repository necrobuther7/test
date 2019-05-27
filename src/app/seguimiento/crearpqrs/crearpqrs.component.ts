import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { pqrs } from "../../components/interface/pqrs.interface";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrearPqrsService } from '../../services/crear-pqrs.service';
import { log } from 'util';

@Component({
  selector: 'app-crearpqrs',
  templateUrl: './crearpqrs.component.html',
})
export class CrearpqrsComponent implements OnInit {

  Pqrs: pqrs = {
    id_pqr: 0,
    tipo_pqr: "",
    fecha_pqr: "",
    id_cliente: "",
    estado_pqr: "",
    id_medio_comunicacion: "",
    descripcion: ""
  }

  constructor(private crearPqrsService:CrearPqrsService) { }

  ngOnInit() {
  }
     
    // guardar(){
    //   this.crearPqrsService.CrearPqrs(this.Pqrs)
    //   .subcribe(data=>{
      
    //   });
    // }
    

}
 
  
