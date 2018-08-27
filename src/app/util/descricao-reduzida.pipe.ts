import { Pipe, PipeTransform } from '@angular/core'

//decorator que permite ao angular saber que esta classe importada no app module é um pipe e não um componente
@Pipe({
    name: 'descricaoReduzida'
})

export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, terminaEm: number, iniciaEm): string {
        if (texto.length > 15){
            return texto.substr(iniciaEm, terminaEm) + "..."
        }
        return texto
    }
}