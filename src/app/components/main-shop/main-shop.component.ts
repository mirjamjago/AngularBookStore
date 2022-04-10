import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.css']
})
export class MainShopComponent implements OnInit {
  
  booklist: any[] = [
new Book(1, "Harry Potter", "J.K. Rowling", "Fantasy", "Book is in good contition", 10),
new Book(1, "Harry Potter", "J.K. Rowling", "Fantasy", "Book is in good contition", 10),
new Book(1, "Harry Potter", "J.K. Rowling", "Fantasy", "Book is in good contition", 10),
new Book(1, "Harry Potter", "J.K. Rowling", "Fantasy", "Book is in good contition", 10)
  ];

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
