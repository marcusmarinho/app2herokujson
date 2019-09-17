import { BrowserModule } from '@angular/platform-browser';
// LOCALE ID pacote intl
import { NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
// PipeCustomizada
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

import { AppRoutingModule } from './routing/app.routing.module';
import { CartService } from './order-purchase/cart.service';
import { OfferService } from './offer/offer.service';
import { OrderPurchaseService } from './order-purchase/order-purchase.service';
import { SearchService } from './topo/search.service';
import { CrudService } from './crud/crud.service';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DescricaoReduzida,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt'},
                CartService, OfferService, OrderPurchaseService, SearchService, CrudService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
