import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Books } from 'src/app/models/bookInterf';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: Order[] | undefined;
  book: Books[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
