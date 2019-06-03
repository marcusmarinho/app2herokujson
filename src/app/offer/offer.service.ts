import { Offer } from '../shared/offer.model';
import { Order } from '../shared/order.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, take } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferService {

    constructor(private http: HttpClient) { }

    public getOffer(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas`);
    }

    public getOfferByCategory(categoria: string): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?categoria=${categoria}`);
    }

    public getOfferById(id: number): Observable<Offer> {

        return this.http.get<Offer>(`${URL_API}/ofertas?id=${id}`)
            .pipe(
                take(1),
                map((ofer: Offer) => {
                    return ofer[0];
                })
            );
    }

    public getHowUseOfferById(id: number): Observable<string> {

        return this.http.get<Offer>(`${URL_API}/como-usar?id=${id}`)
            .pipe(
                take(1),
                map((resp: Offer) => {
                    return resp[0].descricao;
                })
            );
    }

    public getWhereIsOfferById(id: number): Observable<string> {

        return this.http.get<Offer>(`${URL_API}/onde-fica?id=${id}`)
            .pipe(
                take(1),
                map((resp: Offer) => {
                    return resp[0].descricao;
                })
            );
    }

    public searchOffer(termo: string): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                take(1));
    }

    public searchPedido(idDoPedido: number): Observable<any> {
        return this.http.get(`${URL_API}/pedidos?id=${idDoPedido}`)
            .pipe(
                take(1),
                map((res) =>{
                    return res[0];    
                })     
            )
    }

    public updateOrder(idDoPedido: number, data: Order): Observable<any> {

        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.put(`${URL_API}/pedidos/${idDoPedido}`, data)
            .pipe(take(1));
    }

    public deleteOrder(idDoPedido: number): Observable<any> {
        let headers: Headers = new Headers();

        headers.append('Contet-type', 'application/json');

        return this.http.delete(`${URL_API}/pedidos/${idDoPedido}`)
            .pipe(take(1));
    }
}
