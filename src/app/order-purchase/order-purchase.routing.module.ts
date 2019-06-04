import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OrderPurchaseComponent } from '../order-purchase/order-purchase.component';

export const orderPurchaseRoutes: Routes = [
    { path: 'ordem-compra', component: OrderPurchaseComponent }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(orderPurchaseRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class OrderPurchaseRoutingModule { }
