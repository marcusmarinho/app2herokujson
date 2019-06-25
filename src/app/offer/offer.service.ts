import { Offer } from '../shared/offer.model';
import { Order } from '../shared/order.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class OfferService {

    constructor(private http: HttpClient) { }

    public getOffer(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas`)
        .pipe(
            map((res) => {
                return res as Offer[];
            })
        );
    }

    public getOfferByCategory(categoria: string): Observable<Offer[]> {
        let params;
        params = new HttpParams().set('categoria', categoria);
        return this.http.get<Offer[]>(`${URL_API}/ofertas`, {params: params})
        .pipe(
            map((res) => {
                return res as Offer[];
            })
        );
    }

    public getOfferById(id: number): Observable<Offer> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get<Offer>(`${URL_API}/ofertas`, {params: params})
            .pipe(
                take(1),
                map((ofer: Offer) => {
                    return ofer[0] as Offer;
                })
            );
    }

    public getHowUseOfferById(id: number): Observable<string> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get<Offer>(`${URL_API}/como-usar`, {params: params})
            .pipe(
                take(1),
                map((resp: Offer) => {
                    return resp[0].descricao as string;
                })
            );
    }

    public getWhereIsOfferById(id: number): Observable<string> {
        let params;
        params = new HttpParams().set('id', String(id));

        return this.http.get<Offer>(`${URL_API}/onde-fica`, {params: params})
            .pipe(
                take(1),
                map((resp: Offer) => {
                    return resp[0].descricao as string;
                })
            );
    }

    public searchOffer(termo: string): Observable<Offer[]> {

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((res) => {
                    console.log(res as Offer[]);
                    return res as Offer[];
                })
            );
    }

    public searchPedido(idDoPedido: number): Observable<any> {
        let params;
        params = new HttpParams().set('id', String(idDoPedido));
        return this.http.get(`${URL_API}/pedidos`, {params: params})
            .pipe(
                take(1),
                map((res) => {
                    return res[0] as any;
                })
            );
    }

    public updateOrder(idDoPedido: number, data: Order): Observable<any> {

        const headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.put(`${URL_API}/pedidos/${idDoPedido}`, data)
            .pipe(take(1));
    }

    public deleteOrder(idDoPedido: number): Observable<any> {
        const headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.delete(`${URL_API}/pedidos/${idDoPedido}`)
            .pipe(take(1));
    }
}
