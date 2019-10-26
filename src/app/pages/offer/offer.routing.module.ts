import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer.component';
import { HowUseComponent } from './how-use/how-use.component';
import { WhereIsComponent } from './where-is/where-is.component';

export const offerRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'oferta/:id', component: OfferComponent,
                children: [
                    { path: 'como-usar', component: HowUseComponent },
                    { path: 'onde-fica', component: WhereIsComponent }
                ]
            }
        ]
    }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(offerRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class OfferRoutingModule { }
