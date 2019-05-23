import { ItemCart } from "./item-cart.model";

export class Order {
    constructor(
        public endereco: string = '',
        public numero: string = '',
        public complemento: string= '',
        public formaPagamento: string= '',
        public itens: Array<ItemCart> = [],
    ) {}
}