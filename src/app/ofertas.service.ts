import { Oferta } from './shared/oferta.model'
import { Pedido } from './shared/pedido.model'

import { Injectable } from '@angular/core'
import { URL_API } from './app.api'
import { Observable, throwError } from 'rxjs'
import './util/rxjs-extensions'
import { Http, Response } from '@angular/http'
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

@Injectable()
export class OfertasService {

    constructor(private http: Http) { }
    /*Dessa forma caso seja necessario alterar a porta ou a url, modificamos apenas esse parametro :D
    private url_api = 'http://localhost:3000/ofertas'
    Da forma abaixo caso a aplicação seja complexa e acessadas por diversos serviços, para facilitar
    A manutenção podemos fazer da seguinte forma*/


    public getOfertas(): Observable<Oferta[]> {
        /*Efetuar uma requisição Http
          retornar uma promise Ofertas[]
          return  this.http.get('http://localhost:3000/ofertas?categoria=diversao')
          return this.http.get(`${this.url_api}?destaque = true`)*/
        return this.http.get(`${URL_API}/ofertas`)
            .map((resposta: Response) => resposta.json())

    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        /*  Requisição http onde sera passado como parametro de pesquisa a 'categoria'
           dessa forma sera possivel alinhar o template 
           return this.http.get(`${this.url_api}?categoria=${categoria}`)*/
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .map((resposta: Response) => resposta.json())

    }

    public getOfertasPorId(id: number): Observable<Oferta> {
        //return this.http.get(`${this.url_api}?id=${id}`)
        return this.http.get(`${URL_API}/ofertas?id=${id}`)

            .map((resposta: Response) => {
                //O metodo .shift() extrai o primeiro indice do array
                //Mesmo sendo o retorno do tipo array atraves do shift é possivel recuperar apenas o objeto.      
                return resposta.json().shift()
                //return reposta.json()[0]
            })

    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {

        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .map((resposta: Response) => {
                //console.log(resposta.json().shift().descricao)
                return resposta.json()[0].descricao
            })

    }

    public getOndeFicaOfertaPorId(id: number): Observable<string> {

        return this.http.get(`${URL_API}/onde-fica?id=${id}`)

            .map((resposta: Response) => {
                //console.log(resposta.json().shift().descricao)
                return resposta.json()[0].descricao

            })

    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        //Pesquisa por aproximação _like=${}
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            /*O retorno é do tipo Response devido ao observable, para resolver este problema deve-se
              converter o retorno de modo que ele entenda o objeto literal json
              Uma forma bacana é utilizar .map
            */
            //quantidade de tentativas que o servidor ira tentar se reconectar com a aplicação
            .retry(10)
            .map((resposta: Response) => resposta.json())
    }

    public consultaPedido(idDoPedido: number): Observable<any> {
        return this.http.get(`${URL_API}/pedidos?id=${idDoPedido}`)
            .map((resposta: Response) => {
                return resposta.json().shift()
            })
    }
}
