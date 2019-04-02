import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeOrderComponent } from './change-order/change-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferService } from '../offer/offer.service';

import { CrudRoutingModule } from './crud.routing.module';

@NgModule({
  declarations: [
    ChangeOrderComponent,
    SearchOrderComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ChangeOrderComponent,
    SearchOrderComponent,
  ],
  providers:[
    OfferService,
  ],
})
export class CrudModule { }
