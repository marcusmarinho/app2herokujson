import { Oferta } from './shared/oferta.model'
import { Pedido } from './shared/pedido.model'

import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import './util/rxjs-extensions'
import { Http, Response } from '@angular/http'
import { HttpParams, HttpClient } from '@angular/common/http'
import { environment } from '../../src/environments/environment';


@Injectable()
export class OfertasService {

    baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = `${environment.API_ENDPOINT}`;
    }
    /*Dessa forma caso seja necessario alterar a porta ou a url, modificamos apenas esse parametro :D
    private url_api = 'http://localhost:3000/ofertas'
    Da forma abaixo caso a aplicação seja complexa e acessadas por diversos serviços, para facilitar
    A manutenção podemos fazer da seguinte forma*/


    public getOfertas(): Observable<Oferta[]> {
        return this.http.get(`${this.baseURL}/ofertas`)
            .map((resposta) => resposta as Oferta[]);

    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        let params;
        params = new HttpParams().set('categoria', categoria);
        return this.http.get(`${this.baseURL}/ofertas`, {params: params})
            .map((resposta) => resposta as Oferta[]);

    }

    public getOfertasPorId(id: number): Observable<Oferta> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get(`${this.baseURL}/ofertas`, { params: params })
            .map((resposta) => { 
                return resposta[0] as Oferta;
            });

    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get(`${this.baseURL}/como-usar`, { params: params })
            .map((resposta) => {
                return resposta[0].descricao as string;
            });

    }

    public getOndeFicaOfertaPorId(id: number): Observable<string> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get(`${this.baseURL}/onde-fica`, { params: params })
            .map((resposta: Response) => {
                return resposta.json()[0].descricao

            });
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        let params;
        params = new HttpParams().set('descricao_oferta_like', termo);
        return this.http.get(`${this.baseURL}/ofertas`, { params: params })
            .retry(10)
            .map((resposta) => resposta as Oferta[]);
    }

    public consultaPedido(idDoPedido: number): Observable<any> {
        let params;
        params = new HttpParams().set('id', String(idDoPedido));
        return this.http.get(`${this.baseURL}/pedidos`, { params: params })
            .map((resposta) => {
                return resposta[0] as any;
            });
    }
}
