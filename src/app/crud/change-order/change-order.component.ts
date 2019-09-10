import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.scss']
})
export class ChangeOrderComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'numeroDoPedido': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'endereco': new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    'complemento': new FormControl({ value: '', disabled: true }),
    'numero': new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'formaDePagamento': new FormControl({ disable: true }, [Validators.required])
  });

  controle: boolean;

  controleValor: boolean;

  order: Order;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.controle = true;
    this.controleValor = false;
    this.order = new Order;
  }

  public efetuaConsulta() {
    if (this.form.get('numeroDoPedido').invalid) {
      this.form.get('numeroDoPedido').markAsTouched();
    } else {
      this.crudService.searchOrder(this.form.value.numeroDoPedido).subscribe(res => {

        if (!res) {
          this.eraseForm();
          this.controle = false;
          this.controleValor = false;
          this.LockFields();
          alert('Numero do Pedido não indentificado');
        }
        this.order = res;
        this.controle = true;
        this.controleValor = true;
        this.form.patchValue({
          endereco: this.order.endereco,
          complemento: this.order.complemento,
          numero: this.order.numero,
          formaDePagamento: this.order.formaPagamento
        });
        this.unlockFields();
      });
    }
  }

  public alterOrder(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('numeroDoPedido').markAsTouched();
    } else {
      this.crudService.updateOrder(this.form.value.numeroDoPedido,
        {
          endereco: this.form.value.endereco,
          numero: this.form.value.numero,
          complemento: this.form.value.complemento,
          formaPagamento: this.form.value.formaDePagamento,
          itens: this.order.itens
        })
        .subscribe(() => {
          alert('Alteração Efetuada com Sucesso!!');
          this.ngOnInit();
          this.LockFields();
          this.eraseForm();
        });
    }
  }

  public unlockFields(): void {
    this.form.controls['endereco'].enable();
    this.form.controls['complemento'].enable();
    this.form.controls['numero'].enable();
    this.form.controls['formaDePagamento'].enable();
  }

  public LockFields(): void {
    this.form.controls['endereco'].disable();
    this.form.controls['complemento'].disable();
    this.form.controls['numero'].disable();
    this.form.controls['formaDePagamento'].disable();
  }

  public eraseForm(): void {
    this.form.patchValue({
      endereco: '',
      complemento: '',
      numero: '',
      formaDePagamento: ''
    });
  }

  public totalValueOrder(): number {
    // let [...itensPedido] = this.order.itens
    let resultado: 0;

    this.order.itens.forEach(val => {
      resultado += val.quantidade * val.valor;
    });
    return resultado;
  }
}
