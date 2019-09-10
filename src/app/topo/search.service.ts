import { Observable } from 'rxjs';
import { Offer } from '../shared/offer.model';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.api';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) { }

    public searchOffer(termo: string): Observable<Offer[]> {

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((res) => {
                    console.log(res as Offer[]);
                    return res as Offer[];
                })
            );
    }
}
