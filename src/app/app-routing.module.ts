import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categoria', loadChildren: './pages/category/category.module#CategoryModule'
    },
    {
        path: 'crud', loadChildren: './pages/crud/crud.module#CrudModule'
    },
    {
        path: 'offer', loadChildren: './pages/offer/offer.module#OfferModule'
    },
    {
        path: 'order-purchase', loadChildren: './pages/order-purchase/order-purchase.module#OrderPurchaseModule'
    },
    {
        path: 'pesquisa', loadChildren: './pages/search-order/search-order.module#SearchOrderModule'
    }

 ];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
