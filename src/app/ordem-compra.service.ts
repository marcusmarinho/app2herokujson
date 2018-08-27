import { Pedido } from './shared/pedido.model'
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from '../../node_modules/rxjs/Observable';
import { URL_API } from './app.api'

@Injectable()
export class OrdemCompraService{

    constructor(private http: Http) { }
    public efetivarCompra(pedido: Pedido): Observable<any> {

        let headers: Headers = new Headers()

        //Informação contida no metodo post ou seja o objeto pedido
        headers.append('Content-type', 'application/json')
    /*Headers
      Many servers require extra headers for save operations. 
      For example, they may require a "Content-Type" header to explicitly declare the 
      MIME type of the request body. Or perhaps the server requires an authorization token.
      The HeroesService defines such headers in an httpOptions object that will be passed to every 
      HttpClient save method
    */
        
        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers})
        )
        .map(( resposta: Response) => resposta.json().id)
    }

}