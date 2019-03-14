import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

import { OfertasService } from '../oferta/ofertas.service';

import { CategoriaRoutingModule } from './categoria.routing.module';

@NgModule({
  declarations: [
    DiversaoComponent,
    RestaurantesComponent,
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  exports:[
    DiversaoComponent,
    RestaurantesComponent,
  ],
  providers:[
    OfertasService,
  ],
})
export class CategoriaModule { }
