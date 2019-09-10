import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../shared/order.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss']
})

export class SearchOrderComponent implements OnInit {

  public consultaFormulario: FormGroup = new FormGroup({
    'numeroDoPedido': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'endereco': new FormControl({ value: '', disabled: true }),
    'complemento': new FormControl({ value: '', disabled: true }),
    'numero': new FormControl({ value: '', disabled: true }),
    'formaDePagamento': new FormControl({ value: '', disabled: true })
  });

  public controle: boolean;

  public controleValor: boolean;

  public order: Order;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.controle = true;
    this.controleValor = false;
    this.order = new Order;
  }

  public efetuaConsulta() {
    if (this.consultaFormulario.status === 'INVALID') {
      this.consultaFormulario.get('numeroDoPedido').markAsTouched();
    } else {
      this.crudService.searchOrder(this.consultaFormulario.value.numeroDoPedido).subscribe(res => {
        if (!res) {
          this.eraseForm();
          this.controle = false;
          this.controleValor = false;
          alert('pedido nao identificado');
        }
        this.order = res;
        this.controle = true;
        this.controleValor = true;
        this.consultaFormulario.patchValue({
          endereco: this.order.endereco,
          complemento: this.order.complemento,
          numero: this.order.numero,
          formaDePagamento: this.order.formaPagamento
        });
      });
    }
  }

  public totalPedido(): number {
    // let [...itensPedido] = this.order.itens
    let resultado: 0;

    this.order.itens.forEach(val => {
      resultado += val.quantidade * val.valor;
    });
    return resultado;
  }

  public eraseForm(): void {
    this.consultaFormulario.patchValue({
      endereco: '',
      complemento: '',
      numero: '',
      formaDePagamento: ''
    });
  }
}
