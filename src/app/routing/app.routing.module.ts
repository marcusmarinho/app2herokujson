import { NgModule } from '@angular/core';

import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { HomeComponent } from '../home/home.component'

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },

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