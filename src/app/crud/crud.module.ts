import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeOrderComponent } from './change-order/change-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud.routing.module';
import { CrudService } from './crud.service';

import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ChangeOrderComponent,
    SearchOrderComponent,
    DeleteOrderComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule

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
