import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.css']
})
export class MainShopComponent implements OnInit {
  
  booklist: Book[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  

}
