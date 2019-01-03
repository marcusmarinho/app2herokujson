import { BrowserModule } from '@angular/platform-browser';
//LOCALE ID pacote intl

import { NgModule, LOCALE_ID} from '@angular/core';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { HttpModule } from '@angular/http' 
import { RouterModule} from '@angular/router'

//import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

//import das rotas de navegação
import { ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component'
import { HomeComponent } from './home/home.component'
import { RodapeComponent } from './rodape/rodape.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'

//PipeCustomizada
import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

import { CarrinhoService } from './carrinho.service'


@NgModule({
    declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
    //FormsModule
  ],
  providers: [CarrinhoService,  {  provide: LOCALE_ID, useValue: 'pt'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
