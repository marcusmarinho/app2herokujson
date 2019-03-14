import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

//Import do modelo para que seja feito o databiding/interpolation 
import { Oferta } from '../shared/oferta.model'

import { CarrinhoService } from '../ordem-compra/carrinho.service'
//Service
import { OfertasService } from './ofertas.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})

export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertasPorId(parametros.id)
        .subscribe((oferta: Oferta) => {
          this.oferta = oferta
          console.log('ofertas',this.oferta)
        })
    })
  }

  public adicionarItemCarrinho(oferta: Oferta): void {
 
    this.carrinhoService.incluirItem(this.oferta)
    console.log('exibir itens' ,this.carrinhoService.exibirItens())
  }

}

