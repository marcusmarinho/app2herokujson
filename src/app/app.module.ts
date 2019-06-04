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
// Modules
import { OfferModule } from './offer/offer.module';
import { CategoryModule} from './category/category.module';
import { AppRoutingModule } from './routing/app.routing.module';
import { OrderPurchaseModule } from './order-purchase/order-purchase.module';
import { CrudModule } from './crud/crud.module';

@NgModule({
    declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DescricaoReduzida,
  ],
  imports: [
    OfferModule,
    CategoryModule,
    OrderPurchaseModule,
    CrudModule,
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
