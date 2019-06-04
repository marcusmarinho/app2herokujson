import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferComponent } from './offer.component';
import { WhereIsComponent} from './where-is/where-is.component';
import { HowUseComponent } from './how-use/how-use.component';
import { OfferService } from './offer.service';
import { CartService } from '../order-purchase/cart.service';
import { OfferRoutingModule } from './offer.routing.module';

@NgModule({
  declarations: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ],
  exports: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent
  ],
  providers: [
    OfferService,
    CartService
  ],
})

export class OfferModule { }
