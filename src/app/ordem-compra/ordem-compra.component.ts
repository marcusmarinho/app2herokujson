import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra/ordem-compra-sucesso/ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { CarrinhoService } from './carrinho.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number
  public itensCarrinho: ItemCarrinho[] = []
  public alteraQuantidade: boolean

  //Funciona como um controlador que sera inserido no nosso formulario
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra(): void {
    
    if (this.formulario.status === 'INVALID') {
        this.formulario.get('endereco').markAsTouched(),
        this.formulario.get('numero').markAsTouched(),
        this.formulario.get('complemento').markAsTouched(),
        this.formulario.get('formaPagamento').markAsTouched()
    } else {

        let pedido: Pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          //passa para nossa api rest os itens comprados
          this.carrinhoService.exibirItens()
          
        )
        
        this.ordemCompraService.efetivarCompra(pedido)
        
          .subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido
          })      
        if(this.idPedidoCompra = null){
          console.log('tem algo errado')
        }
      }
      this.updateCart()
    }
  

  public updateCart(): void {
      this.itensCarrinho.length = 0
  }

  public alterar(item: ItemCarrinho, alteraQuantidade): void {
    this.carrinhoService.alteraQuantidade(item, alteraQuantidade)
  }
}
