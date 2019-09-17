import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CategoryRoutingModule } from './category.routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FunComponent,
    RestaurantsComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    FunComponent,
    RestaurantsComponent,
  ],
  providers: [],
})

export class CategoryModule { }
