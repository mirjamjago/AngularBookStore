import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-vendor-bookshelf',
  templateUrl: './vendor-bookshelf.component.html',
  styleUrls: ['./vendor-bookshelf.component.css']
})
export class VendorBookshelfComponent implements OnInit {

  booklist: Book[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
