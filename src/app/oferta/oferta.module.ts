import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaComponent } from './oferta.component';
import { OndeFicaComponent} from './onde-fica/onde-fica.component';
import { ComoUsarComponent } from './como-usar/como-usar.component';
import { OfertasService } from './ofertas.service';
import { CarrinhoService } from '../ordem-compra/carrinho.service';
import { OfertaRoutingModule } from './oferta.routing.module';

@NgModule({
  declarations: [
    OfertaComponent,
    OndeFicaComponent,
    ComoUsarComponent
  ],
  imports: [
    CommonModule,
    OfertaRoutingModule
  ],
  exports:[
    OfertaComponent,
    OndeFicaComponent,
    ComoUsarComponent
  ],
  providers:[
    OfertasService,
    CarrinhoService
  ],
})
export class OfertaModule { }
