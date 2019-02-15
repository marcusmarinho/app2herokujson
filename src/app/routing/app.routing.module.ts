import { NgModule } from '@angular/core';

import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { HomeComponent } from '../home/home.component'
import { RestaurantesComponent } from '../restaurantes/restaurantes.component'
import { DiversaoComponent } from '../diversao/diversao.component'
import { OrdemCompraComponent } from '../ordem-compra/ordem-compra.component'
import { PesquisaPedidoComponent } from '../pesquisa-pedido/pesquisa-pedido.component'
import { AlteraPedidoComponent } from '../altera-pedido/altera-pedido.component'

export  const ROUTES: Routes = [
    { path: 'oferta', loadChildren: 'app/oferta/oferta.module#OfertaModule'},

    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'pesquisapedido', component: PesquisaPedidoComponent },
    { path: 'alterapedido', component: AlteraPedidoComponent },
    { path: 'oferta', component: HomeComponent },
    { path: 'ordem-compra', component: OrdemCompraComponent }
 ]

@NgModule({
    imports:[
        RouterModule.forRoot(ROUTES)
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule { }