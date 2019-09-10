import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';

export const ROUTES: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categoria', loadChildren: '../category/category.module#CategoryModule'
    },
    {
        path: 'crud', loadChildren: '../crud/crud.module#CrudModule'
    },
    {
        path: 'offer', loadChildren: '../offer/offer.module#OfferModule'
    },
    {
        path: 'order-purchase', loadChildren: '../order-purchase/order-purchase.module#OrderPurchaseModule'
    }

 ];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
