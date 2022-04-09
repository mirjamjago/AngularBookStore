import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  bookname!: string;
  author!: string;
  genre!: string;
  comment!: string;
  price!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
