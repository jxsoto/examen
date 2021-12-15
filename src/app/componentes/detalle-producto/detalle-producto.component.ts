import { Component, OnInit } from '@angular/core';
import {ListaProductos} from './../../interfaces/productos';
import {ActivatedRoute,Route} from '@angular/router';
import { FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

ListaProductos=ListaProductos;
id:number=0;
producto:any;
form:FormGroup;
nombre:any;
Carrito:Array<String>=[];
  constructor(private ruta:ActivatedRoute, public fb:FormBuilder) {

    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"] });


  this.form=this.fb.group({

    nombre:['',Validators.required]

  });

  this.nombre=this.form.controls["nombre"];
   }

  ngOnInit(): void {
    
    this.producto=ListaProductos.find(objeto=>objeto.id==this.id);
    this.nombre=this.form.get("nombre") as FormGroup;
  }
  crear(){
    this.Carrito.push(this.nombre.value);
  }

}
