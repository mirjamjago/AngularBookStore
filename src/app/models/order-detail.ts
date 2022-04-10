import { Book } from "./book";

export class OrderDetail {
    id?: number;
    amount?: number;
    book?: Book;

    constructor(id?: number, amount?:number,  book?: Book){
        this.id = id;
        this.amount = amount;
        this.book = book;
    }
}
