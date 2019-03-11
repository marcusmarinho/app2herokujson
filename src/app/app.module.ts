import { BrowserModule } from '@angular/platform-browser';
//LOCALE ID pacote intl

import { NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { HttpModule } from '@angular/http' 
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { TopoComponent } from './topo/topo.component'
import { HomeComponent } from './home/home.component'
import { RodapeComponent } from './rodape/rodape.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'

//PipeCustomizada
import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

import { PesquisaPedidoComponent } from './pesquisa-pedido/pesquisa-pedido.component';
import { AlteraPedidoComponent } from './altera-pedido/altera-pedido.component'

//Modules
import { OfertaModule } from './oferta/oferta.module';
import { AppRoutingModule } from './routing/app.routing.module';

//PedidoModule
@NgModule({
    declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    PesquisaPedidoComponent,
    AlteraPedidoComponent
  ],
  imports: [
    AppRoutingModule,
    OfertaModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
