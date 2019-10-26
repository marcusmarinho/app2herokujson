import { Offer } from '../../shared/models/offer.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class OfferService {

    constructor(private http: HttpClient) { }

    public getOffer(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${environment.host}/ofertas`);
    }

    public getOfferByCategory(categoria: string): Observable<Offer[]> {
        let params;
        params = new HttpParams().set('categoria', categoria);
        return this.http.get<Offer[]>(`${environment.host}/ofertas`, {params: params});
    }

    public getOfferById(id: number): Observable<Offer> {
        let params;
        params = new HttpParams().set('id', String(id));
        return this.http.get<Offer>(`${environment.host}/ofertas`, {params: params})
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
        return this.http.get<Offer>(`${environment.host}/como-usar`, {params: params})
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

        return this.http.get<Offer>(`${environment.host}/onde-fica`, {params: params})
            .pipe(
                take(1),
                map((resp: Offer) => {
                    return resp[0].descricao as string;
                })
            );
    }
}
