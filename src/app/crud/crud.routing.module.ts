import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SearchOrderComponent } from './search-order/search-order.component';
import { ChangeOrderComponent } from './change-order/change-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';

export const crudRoutes: Routes = [

    { path: 'consulta-pedido', component: SearchOrderComponent },
    { path: 'altera-pedido', component: ChangeOrderComponent },
    { path: 'deleta-pedido', component: DeleteOrderComponent}
 ]

@NgModule({
    imports:[
        RouterModule.forChild(crudRoutes)
    ],
    exports:[
        RouterModule
    ]

})

export class CrudRoutingModule { }