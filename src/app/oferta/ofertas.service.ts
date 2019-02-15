import { Oferta } from '../shared/oferta.model'
import { Injectable } from '@angular/core'
import { URL_API } from '../app.api'
import { Observable } from 'rxjs'
import '../util/rxjs-extensions'
import { Http, Response } from '@angular/http'


@Injectable()
export class OfertasService {

    constructor(private http: Http) { }

    public getOfertas(): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas`)
            .map((resposta: Response) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .map((resposta: Response) => resposta.json())
    }

    public getOfertasPorId(id: number): Observable<Oferta> {

        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .map((resposta: Response) => {
                return resposta.json().shift()
            })
    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {

        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .map((resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Observable<string> {

        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .map((resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
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
