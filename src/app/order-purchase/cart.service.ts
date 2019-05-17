import { ItemCart } from "../shared/item-cart.model";
import { Offer } from '../shared/offer.model'
import { Injectable } from '@angular/core'

@Injectable()
class CartService {
    
    public itens: ItemCart[] = []

    public itemCarrinhoEncontrado: any

    public exibirItens(): ItemCart[] {
        return this.itens
    }

    public exibirDadosDaCompra(){
        return 
    }

    public incluirItem(offer: Offer): void {

        let itemCarrinho: ItemCart = new ItemCart(
            offer.id,
            offer.imagens[0],
            offer.titulo,
            offer.descricao_oferta,
            offer.valor,
            1
        )
        
        //Verifica se item add no carrinho é repetido caso sim aumenta somente a quantidade
         this.itemCarrinhoEncontrado = this.itens.find((item: ItemCart) => item.id === itemCarrinho.id)

        if (this.itemCarrinhoEncontrado) {
            this.itemCarrinhoEncontrado.quantidade += 1
            
        } else {
            //metodo push permite pegar alguma informação e add no array
            this.itens.push(itemCarrinho)
        }
    }

    public getCartQt(): number {
        let totalItens: number = null
        this.itens.map((item: ItemCart) => {
            totalItens += item.quantidade
        })
        return totalItens
    }
    
    public totalCarrinhoCompras(): number {

        let total: number = 0
        this.itens.map((item: ItemCart) => {
            total += (item.valor * item.quantidade)
        })

        return total
    }

    public alteraQuantidade(itemCarrinho: ItemCart, soma?: boolean): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCart) => item.id === itemCarrinho.id)

        if (soma == true) {
            if (itemCarrinhoEncontrado) {
                itemCarrinhoEncontrado.quantidade += 1

            }
        } else {
            if (itemCarrinhoEncontrado.quantidade > 0) {
                if (itemCarrinhoEncontrado) {
                    itemCarrinhoEncontrado.quantidade -= 1

                    if(itemCarrinhoEncontrado.quantidade === 0){
                        /*splice:Com base em um indice do array o metodo recorta o indice e despreza.
                        parametros(?'nao sabemos qual indice vai ser', 1 quantidade de recortes)
                        indexof retorna a chave do array
                        */
                        this.itens.splice(this.itens.lastIndexOf(itemCarrinhoEncontrado), 1)
                        //let x = this.itens.splice('abc') recorta o indice abc e entra na variavel x
                    }
                }
            }
        }
    }
}
export { CartService }
