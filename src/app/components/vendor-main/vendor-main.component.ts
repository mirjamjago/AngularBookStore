import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-vendor-main',
  templateUrl: './vendor-main.component.html',
  styleUrls: ['./vendor-main.component.css']
})
export class VendorMainComponent implements OnInit {

  booklist: Book[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
