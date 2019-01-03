import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'


@Injectable()
class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public itemCarrinhoEncontrado: any

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
        
        //Verifica se item add no carrinho é repetido caso sim aumenta somente a quantidade
         this.itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (this.itemCarrinhoEncontrado) {
            this.itemCarrinhoEncontrado.quantidade += 1
            
        } else {
            //metodo push permite pegar alguma informação e add no array
            this.itens.push(itemCarrinho)
        }
    }
    
    public totalCarrinhoCompras(): number {

        let total: number = 0
        this.itens.map((item: ItemCarrinho) => {
            total += (item.valor * item.quantidade)
        })

        return total
    }

    public alteraQuantidade(itemCarrinho: ItemCarrinho, soma?: boolean): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

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
export { CarrinhoService }
