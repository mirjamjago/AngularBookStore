import { OrderDetail } from "./order-detail";

export class Order {
    id?: number;
    amount?: number;
    orderDetails?: OrderDetail;

    constructor(id?: number, amount?:number, orderDetails?: OrderDetail){
        this.id = id;
        this.amount = amount;
        this.orderDetails = orderDetails;
    }
}
