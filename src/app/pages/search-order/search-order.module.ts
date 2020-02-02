import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SearchOrderComponent } from './search-order.component';
import { SearchOrderRoutingModule } from './search-order.routing.module';

@NgModule({
    imports: [
        CommonModule,
        SearchOrderRoutingModule
    ],
    exports: [
        SearchOrderComponent
    ],
    declarations: [
        SearchOrderComponent
    ],
    providers: [],
})

export class SearchOrderModule { }
