import { ItemCart } from '../../shared/models/item-cart.model';
import { Offer } from '../../shared/models/offer.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

class CartService {

    public itens: ItemCart[] = [];

    public itemCarrinhoEncontrado: any;

    public exibirItens(): ItemCart[] {
        return this.itens;
    }

    public incluirItem(offer: Offer): void {
        const itemCarrinho: ItemCart = new ItemCart(
            offer.id,
            offer.imagens[0],
            offer.titulo,
            offer.descricao_oferta,
            offer.valor,
            1
        );

        this.itemCarrinhoEncontrado = this.itens.find((item: ItemCart) => item.id === itemCarrinho.id);

        if (this.itemCarrinhoEncontrado) {
            this.itemCarrinhoEncontrado.quantidade += 1;
        } else {
            this.itens.push(itemCarrinho);
        }
    }

    public getCartQt(): number {
        let totalItens = null;
        this.itens.map((item: ItemCart) => {
            totalItens += item.quantidade;
        });
        return totalItens;
    }

    public totalCarrinhoCompras(): number {
        let total: 0;
        this.itens.map((item: ItemCart) => {
            total += (item.valor * item.quantidade);
        });
        return total;
    }

    public alteraQuantidade(itemCarrinho: ItemCart, soma?: boolean): void {
        const itemCarrinhoEncontrado = this.itens.find((item: ItemCart) => item.id === itemCarrinho.id);

        if (soma === true) {
            if (itemCarrinhoEncontrado) {
                itemCarrinhoEncontrado.quantidade += 1;
            }
        } else {
            if (itemCarrinhoEncontrado.quantidade > 0) {
                if (itemCarrinhoEncontrado) {
                    itemCarrinhoEncontrado.quantidade -= 1;

                    if (itemCarrinhoEncontrado.quantidade === 0) {
                        this.itens.splice(this.itens.lastIndexOf(itemCarrinhoEncontrado), 1);
                    }
                }
            }
        }
    }
}
export { CartService };
