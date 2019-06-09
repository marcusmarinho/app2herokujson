import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FunComponent } from './fun/fun.component';

export const categoryRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'restaurantes', component: RestaurantsComponent },
            { path: 'diversao', component: FunComponent }
        ]
    }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule { }
