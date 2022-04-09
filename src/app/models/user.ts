export class User {
    username?: string;
    email?: string;
    password?: string;
    isVendor?: boolean;

    constructor( username?: string, email?: string, password?: string, isVendor?: boolean){
        this.username = username;
        this.email = email;
        this.password = password;
        this.isVendor = isVendor;
    }

}
