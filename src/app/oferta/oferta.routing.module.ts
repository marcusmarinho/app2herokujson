import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfertaComponent } from '../oferta/oferta.component'
import { ComoUsarComponent } from '../oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from '../oferta/onde-fica/onde-fica.component'

export const ofertaRoutes: Routes = [

    { path: '', component: OfertaComponent },

    { path: 'oferta/:id', component: OfertaComponent, 
        children: [
            { path: 'como-usar', component: ComoUsarComponent },
            { path: 'onde-fica', component: OndeFicaComponent }
        ]
     },
 ]

@NgModule({
    imports:[
        RouterModule.forChild(ofertaRoutes)
    ],
    exports:[
        RouterModule
    ]

})

export class OfertaRoutingModule { }