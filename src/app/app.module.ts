import { BrowserModule } from '@angular/platform-browser';
//LOCALE ID pacote intl

import { NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { HttpModule } from '@angular/http' 

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component'
import { HomeComponent } from './home/home.component'
import { RodapeComponent } from './rodape/rodape.component'

//PipeCustomizada
import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

//Modules
import { OfertaModule } from './oferta/oferta.module';
import { CategoriaModule} from './categoria/categoria.module'
import { AppRoutingModule } from './routing/app.routing.module';
import { OrdemCompraModule } from './ordem-compra/ordem-compra.module';
import { CrudModule } from  './crud/crud.module'

//PedidoModule
@NgModule({
    declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DescricaoReduzida
  ],
  imports: [
    OfertaModule,
    CategoriaModule,
    OrdemCompraModule,
    CrudModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
