import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchOrderComponent } from './search-order.component';

export const searchOrderRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'pesquisa-pedido', component: SearchOrderComponent }
        ]
    }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(searchOrderRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class SearchOrderRoutingModule { }
