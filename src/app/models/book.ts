
export class Book {
    bookname?: string;
    author?: string;
    genre?: string;
    comment?: string;
    price?: number;

    constructor(bookname?: string, author?: string, genre?: string, comment?: string, price?: number){
        this.bookname = bookname;
        this.author = author;
        this.genre = genre;
        this.comment = comment;
        this.price = price;
    }
}
