import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormsModule  } from '@angular/forms'
import { RegistrarPqrsService } from '../../services/registrar-pqrs.service';
import { pqrs } from '../../components/interface/pqrs.interface';
import { log } from 'util';

@Component({
  selector: 'app-registrarpqrs',
  templateUrl: './registrarpqrs.component.html',
})
export class RegistrarpqrsComponent implements OnInit {

  Pqrs:pqrs
  id_pqr: Number;
  tipo_pqr: String;
  fecha_pqr: String;
  id_cliente: any;
  estado_pqr: String;
  id_medio_comunicacion: String;
  descripcion: String;

  constructor(private registrarPqrsService:RegistrarPqrsService) { }

  ngOnInit() {
    this.registrarPqrsService.ConsultarPqrs().subscribe(
      then=>{
            console.log("Succesful pqrs service consume")
            return then;
      },error=>{
            console.log("error on consume");
      });
  }

  guardar(){
    console.log(this.Pqrs);
  }

  // this.registrarPqrsService.EliminaPqrs().subscribe(
  //   then=>{
  //         console.log("Succesful pqrs service consume")
  //   },error=>{
  //         console.log("error on consume");
  //   });

}
