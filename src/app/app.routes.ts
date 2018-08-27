import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'

export  const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    //Neste caso, se não tivermos o 'id' do objeto ao inves de mandar uma pagina de ofertas não encontrada
    //Iremos apresentar o home component que recupera todas as ofertas disponiveis
    { path: 'oferta', component: HomeComponent },
    //Estamos usando a notação ':id' no path para poder recuperar o id do objeto através do OfertaComponent 
    { path: 'oferta/:id', component: OfertaComponent, 
        children: [
            { path: 'como-usar', component: ComoUsarComponent },
            { path: 'onde-fica', component: OndeFicaComponent },
            //rota padrao sem atributo para que retorne algo mesmo passando uma rota vazia
            { path: '', component: ComoUsarComponent }    
        ]
     },
     { path: 'ordem-compra', component: OrdemCompraComponent }
 ]
