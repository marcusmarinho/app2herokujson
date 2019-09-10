import { Offer } from '../shared/offer.model';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class OfferService {

    constructor(private http: HttpClient) { }

    public getOffer(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas`);
    }

    public getOfferByCategory(categoria: string): Observable<Offer[]> {
        let params;
        params = new HttpParams().set('categoria', categoria);
        return this.http.get<Offer[]>(`${URL_API}/ofertas`, {params: params});
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
}
