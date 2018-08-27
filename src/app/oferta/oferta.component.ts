import { Component, OnInit } from '@angular/core';
//import snapshot/subscribe route
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'
//Import do modelo para que seja feito o databiding/interpolation 
import { Oferta } from '../shared/oferta.model'
import { CarrinhoService } from '../carrinho.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  //Modelo Oferta para ser resolvida
  public oferta: Oferta

  /*Variaveis para teste Unsubscribe
  Serve de referencia para os subscribes declarados
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription
  */

  // Recupera rota ja estanciando com This para objeto
  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    /*
    Utilizando o atributo route podemos fazer a chamada para o metodo snapshot passando consigo o
    parametro 'params', params é um array pré estanciado onde devemos colocar o atributo que queremos
    recuperar, neste caso o ID da oferta, este id esta configurado na routes.ts passando como componente
    oferta.component.ts
    //Exemplo Snapshot
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        //Aqui sera feito o databind atraves do nosso modelo.
        this.oferta = oferta
      })
      Exemplo com subscribe
      Necessario efetuar o subscribe para que ao efetuar a pesquisa a aplicação mude o template
    */
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertasPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })
    })
  }
  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(this.oferta)
    console.log('exibir itens' ,this.carrinhoService.exibirItens())
  }

}
