import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-purchase-success',
  templateUrl: './order-purchase-success.component.html',
  styleUrls: ['./order-purchase-success.component.scss']
})
export class OrderPurchaseSuccessComponent implements OnInit {

  @Input() public idOrderPurchase: number;

  constructor() { }

  ngOnInit() {

  }

}
