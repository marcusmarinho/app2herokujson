import { NgModule } from '@angular/core';
import { OrderPurchaseSuccessComponent } from './order-purchase-success/order-purchase-success.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPurchaseRoutingModule } from './order-purchase.routing.module';

import { OrderPurchaseComponent } from '../order-purchase/order-purchase.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OrderPurchaseRoutingModule
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
