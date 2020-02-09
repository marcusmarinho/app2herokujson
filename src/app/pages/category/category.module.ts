import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CategoryRoutingModule } from './category.routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [
    FunComponent,
    RestaurantsComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule
  ],
  exports: [
    FunComponent,
    RestaurantsComponent,
  ],
  providers: [],
})

export class CategoryModule { }
