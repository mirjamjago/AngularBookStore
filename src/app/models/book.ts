
export class Book {
    id?: number
    bookname?: string;
    author?: string;
    genre?: string;
    comment?: string;
    price?: number;

    constructor(id?: number, bookname?: string, author?: string, genre?: string, comment?: string, price?: number){
       this.id = id;
        this.bookname = bookname;
        this.author = author;
        this.genre = genre;
        this.comment = comment;
        this.price = price;
    }
}
