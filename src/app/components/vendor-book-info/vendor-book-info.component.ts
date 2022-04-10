import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-vendor-book-info',
  templateUrl: './vendor-book-info.component.html',
  styleUrls: ['./vendor-book-info.component.css']
})
export class VendorBookInfoComponent implements OnInit {
  booklist: Book[] = [
    new Book(1, "Harry Potter", "Jk.Rowling", "Fantacy", "Good contition", 10)
  ];
  currentEdit: Book | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
