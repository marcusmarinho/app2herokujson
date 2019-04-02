import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import { OfferService } from '../offer/offer.service';

import { CategoryRoutingModule } from './category.routing.module';

@NgModule({
  declarations: [
    FunComponent,
    RestaurantsComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports:[
    FunComponent,
    RestaurantsComponent,
  ],
  providers:[
    OfferService,
  ],
})
export class CategoryModule { }
