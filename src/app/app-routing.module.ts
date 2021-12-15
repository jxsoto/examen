import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleProductoComponent} from './componentes/detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path:"", component:InicioComponent },
  { path:"detalleProducto/:id", component:DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
