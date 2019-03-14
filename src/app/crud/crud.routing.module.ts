import { NgModule } from '@angular/core';

import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { PesquisaPedidoComponent } from './pesquisa-pedido/pesquisa-pedido.component'
import { AlteraPedidoComponent } from './altera-pedido/altera-pedido.component'

export const crudRoutes: Routes = [

    { path: 'pesquisapedido', component: PesquisaPedidoComponent },
    { path: 'alterapedido', component: AlteraPedidoComponent },

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