import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlteraPedidoComponent } from './altera-pedido/altera-pedido.component';
import { PesquisaPedidoComponent } from './pesquisa-pedido/pesquisa-pedido.component'
import { ReactiveFormsModule } from '@angular/forms'
import { OfertasService } from '../oferta/ofertas.service';

import { CrudRoutingModule } from './crud.routing.module';

@NgModule({
  declarations: [
    AlteraPedidoComponent,
    PesquisaPedidoComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AlteraPedidoComponent,
    PesquisaPedidoComponent,
  ],
  providers:[
    OfertasService,
  ],
})
export class CrudModule { }
