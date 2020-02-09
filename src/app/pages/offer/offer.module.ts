import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferComponent } from './offer.component';
import { WhereIsComponent} from './where-is/where-is.component';
import { HowUseComponent } from './how-use/how-use.component';

import { OfferRoutingModule } from './offer.routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    MaterialModule
  ],
  exports: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent
  ],
  providers: [],
})

export class OfferModule { }
