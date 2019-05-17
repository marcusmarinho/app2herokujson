import { Component, OnInit } from '@angular/core';
import { OrderPurchaseService } from './order-purchase.service';
import { Order } from '../shared/order.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from './cart.service';
import { ItemCart } from '../shared/item-cart.model';

@Component({
  selector: 'app-order-purchase',
  templateUrl: './order-purchase.component.html',
  styleUrls: ['./order-purchase.component.css'],
  providers: [OrderPurchaseService]
})

export class OrderPurchaseComponent implements OnInit {

  public idOrderPurchase: number
  public itensCart: ItemCart[] = []
  public alteraQuantidade: boolean

  //Funciona como um controlador que sera inserido no nosso formulario
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(
    private orderPurchaseService: OrderPurchaseService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.itensCart = this.cartService.exibirItens();
  }

  public confirmarCompra(): void {
    
    if (this.formulario.status === 'INVALID') {
        this.formulario.get('endereco').markAsTouched(),
        this.formulario.get('numero').markAsTouched(),
        this.formulario.get('complemento').markAsTouched(),
        this.formulario.get('formaPagamento').markAsTouched()
    } 

    if (this.cartService.exibirItens().length === 0) {
      alert ('Nenhum item selecionado');
    } else {

        let order: Order = new Order(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          //passa para nossa api rest os itens comprados
          this.cartService.exibirItens()
          
        )
        
        this.orderPurchaseService.efetivarCompra(order)
        
          .subscribe((idOrder: number) => {
            
            this.idOrderPurchase = idOrder
          })      
        if(!this.idOrderPurchase){
          console.log('tem algo errado')
        }
      }
      this.updateCart()
    }
  
  public updateCart(): void {
      this.itensCart.length = 0
  }

  public alterar(item: ItemCart, alteraQuantidade): void {
    this.cartService.alteraQuantidade(item, alteraQuantidade)
  }
}
