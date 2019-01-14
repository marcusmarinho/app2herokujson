import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Pedido } from '../shared/pedido.model'
import { OfertasService } from '../ofertas.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-pesquisa-pedido',
  templateUrl: './pesquisa-pedido.component.html',
  styleUrls: ['./pesquisa-pedido.component.css'],
  providers: [OfertasService]
})
export class PesquisaPedidoComponent implements OnInit {

  public consultaFormulario: FormGroup = new FormGroup({
    'numeroDoPedido': new FormControl(null, [Validators.required,
    Validators.minLength(1),
    Validators.maxLength(6),
    ]
    )
  })

  public controle?: boolean = false

  public pedido: Pedido

  public valorTotal: number = 0

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.pedido = new Pedido("", "", "", "", [])
  }

  public efetuaConsulta() {
    if (this.consultaFormulario.status === 'INVALID') {
      this.consultaFormulario.get('numeroDoPedido').markAsTouched()
    }
    else {
      this.ofertasService.consultaPedido(this.consultaFormulario.value.numeroDoPedido).subscribe(res => {
        this.pedido = res
        this.controle = true
      })
    }
  }

  public totalPedido(): number {
    let [...itensPedido] = this.pedido.itens
    let resultado: number = 0

    itensPedido.forEach(val => {
      resultado += val.quantidade * val.valor
    })
    return resultado
  }
}

