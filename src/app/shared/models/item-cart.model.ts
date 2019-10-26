class ItemCart {
    constructor(
        public id: number,
        public img: Img,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public quantidade: number) { }
}

export class Img {
    url: string;
}

export { ItemCart };

// order.itens[0].img.url