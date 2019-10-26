import { Order } from '../models/order.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { take } from 'rxjs/operators';

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
            `${environment.host}/pedidos`,
            JSON.stringify(pedido),
            httpOptions
        )
        .pipe(
            take(1)
        );
    }
}
