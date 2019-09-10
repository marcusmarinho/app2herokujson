import { Order } from '../shared/order.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.api';
import { map, take } from 'rxjs/operators';

@Injectable()
export class OrderPurchaseService {

    constructor(private http: HttpClient) { }
    public efetivarCompra(pedido: Order): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
            })
        };

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            httpOptions
        )
        .pipe(
            take(1)
        );
    }
}
