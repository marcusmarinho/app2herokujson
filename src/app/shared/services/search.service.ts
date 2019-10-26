import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) { }

    public searchOffer(termo: string): Observable<Offer[]> {

        return this.http.get(`${environment.host}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((res) => {
                    console.log(res as Offer[]);
                    return res as Offer[];
                })
            );
    }
}
