import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { OrdemCompraComponent } from '../ordem-compra/ordem-compra.component'

export const ordemCompraRoutes: Routes = [

    { path: 'ordem-compra', component: OrdemCompraComponent }
 ];

@NgModule({
    imports:[
        RouterModule.forChild(ordemCompraRoutes)
    ],
    exports:[
        RouterModule
    ]

})

export class OrdemCompraRoutingModule { }