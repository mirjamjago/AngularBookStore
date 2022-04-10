import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.css']
})
export class MainShopComponent implements OnInit {
  
  booklist: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /*
  id?: number
  bookname?: string;
  author?: string;
  genre?: string;
  comment?: string;
  price?: number;
  */

}
