import { Book } from "./book";

export class User {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    isVendor?: boolean;
    book?: Book;

    constructor( id?: number, username?: string, email?: string, password?: string, isVendor?: boolean, book?: Book){
        this.username = username;
        this.email = email;
        this.password = password;
        this.isVendor = isVendor;
        this.book = book;
    }

}
