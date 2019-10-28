import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../../shared/models/order.model';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.scss']
})
export class ChangeOrderComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'endereco': new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    'complemento': new FormControl({ value: '', disabled: true }),
    'numero': new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]),
    'formaDePagamento': new FormControl({ value: '', disabled: true }, [Validators.required])
  });

  controle: boolean;

  order: Order;

  numPedido = new FormControl();


  constructor(private crudService: CrudService) { }


  ngOnInit() {
    this.controle = false;
    this.order = new Order();
  }

  public efetuaConsulta() {


      this.crudService.searchOrder(this.numPedido.value).subscribe(res => {

        if (!res) {
          this.controle = false;
        
          this.LockFields();
        }
        this.order = res;
        this.controle = true;
     
        this.form.patchValue({
          endereco: this.order.endereco,
          complemento: this.order.complemento,
          numero: this.order.numero,
          formaDePagamento: this.order.formaPagamento
        });
        this.unlockFields();
      });
    }


  public alterOrder(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('numeroDoPedido').markAsTouched();
    } else {
      this.crudService.updateOrder(this.numPedido.value,
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
    this.numPedido.disable();
    this.form.controls['endereco'].enable();
    this.form.controls['complemento'].enable();
    this.form.controls['numero'].enable();
    this.form.controls['formaDePagamento'].enable();
  }

  public LockFields(): void {
    this.numPedido.enable();
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
  
    let resultado: 0;

    this.order.itens.forEach(val => {
      resultado += val.quantidade * val.valor;
    });
    return resultado;
  }
}
