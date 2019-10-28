import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangeOrderComponent } from './change-order/change-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud.routing.module';
import { CrudService } from '../../shared/services/crud.service';

import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

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
    MatButtonModule,
    FormsModule,
    MatExpansionModule

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
