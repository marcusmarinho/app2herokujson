import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Order } from '../../shared/order.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {

  public deleteOrderForm: FormGroup = new FormGroup({
    'orderNumber': new FormControl(null, [Validators.required])
  });

  constructor(private crudService: CrudService) { }

  public order: Order;

  public controle: boolean;

  ngOnInit() {
    this.order = new Order;
    this.controle = false;
  }


  searchOrder() {
    this.crudService.searchOrder(this.deleteOrderForm.value.orderNumber)
      .subscribe((res => {
        if (!res) {
          alert('pedido não encontrado');
          this.ngOnInit();
        } else {
          this.controle = true;
          this.order = res;
        }
      }));
  }

  deleteOrder() {
    this.crudService.deleteOrder(this.deleteOrderForm.value.orderNumber)
      .subscribe((res => {
        alert('Pedido Excluido');
        this.ngOnInit();
      }));
  }
}
