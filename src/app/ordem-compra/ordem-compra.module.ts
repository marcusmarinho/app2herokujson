import { NgModule } from '@angular/core';
import { OrdemCompraComponent } from './ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { CarrinhoService } from './carrinho.service';
import { OrdemCompraService } from './ordem-compra-sucesso/ordem-compra.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdemCompraRoutingModule } from './ordem-compra.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OrdemCompraRoutingModule
    ],
    exports: [
        OrdemCompraComponent,
        OrdemCompraSucessoComponent
    ],
    declarations: [
        OrdemCompraComponent,
        OrdemCompraSucessoComponent
    ],
    providers: [
        CarrinhoService,
        OrdemCompraService
    ],
})

export class OrdemCompraModule{


}