import { NgModule } from '@angular/core';

import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'

export const categoriaRoutes: Routes = [

    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
  
 ]

@NgModule({
    imports:[
        RouterModule.forChild(categoriaRoutes)
    ],
    exports:[
        RouterModule
    ]

})

export class CategoriaRoutingModule { }