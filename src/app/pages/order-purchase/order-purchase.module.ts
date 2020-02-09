import { NgModule } from '@angular/core';
import { OrderPurchaseSuccessComponent } from './order-purchase-success/order-purchase-success.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPurchaseRoutingModule } from './order-purchase.routing.module';

import { OrderPurchaseComponent } from '../order-purchase/order-purchase.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OrderPurchaseRoutingModule,
        MaterialModule,
    ],
    exports: [
        OrderPurchaseComponent,
        OrderPurchaseSuccessComponent
    ],
    declarations: [
        OrderPurchaseComponent,
        OrderPurchaseSuccessComponent
    ],
    providers: [],
})

export class OrderPurchaseModule { }
