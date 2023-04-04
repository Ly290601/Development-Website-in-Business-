export class Product {
    _id: any;
    id:number;
    name: string;
    category: string;
    price: number;
    cadId: number;
    qty: number;
    constructor() {
        this._id = "";
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.category = "";
        this.cadId = 0;
        this.qty = 1;
    }
}