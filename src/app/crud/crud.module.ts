import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeOrderComponent } from './change-order/change-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud.routing.module';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    ChangeOrderComponent,
    SearchOrderComponent,
    DeleteOrderComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ChangeOrderComponent,
    SearchOrderComponent,
  ],
  providers: [
    CrudService
  ],
})
export class CrudModule { }
