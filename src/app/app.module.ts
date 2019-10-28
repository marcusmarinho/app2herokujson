import { BrowserModule } from '@angular/platform-browser';
// LOCALE ID pacote intl
import { NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { HttpClientModule } from '@angular/common/http';
// Component
import { AppComponent } from './app.component';

import { HomeComponent } from '../app/pages/home/home.component';
import { HeaderComponent } from '../app/core/header/header.component';
import { FooterComponent } from '../app/core/footer/footer.component';
// PipeCustomizada
import { DescricaoReduzida } from './shared/utils/descricao-reduzida.pipe';

import { AppRoutingModule } from './app-routing.module';
import { CartService } from '../app/shared/services/cart.service';
import { OfferService } from '../app/shared/services/offer.service';
import { OrderPurchaseService } from '../app/shared/services/order-purchase.service';
import { SearchService } from '../app/shared/services/search.service';
import { CrudService } from '../app/shared/services/crud.service';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    DescricaoReduzida,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [ {  provide: LOCALE_ID, useValue: 'pt'},
                CartService, OfferService, OrderPurchaseService, SearchService, CrudService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
