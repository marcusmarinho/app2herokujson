import { Order } from '../shared/order.model';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

    constructor(private http: HttpClient) {

    }

    public searchOrder(idDoPedido: number): Observable<any> {
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

        return this.http.put(`${URL_API}/pedidos/${idDoPedido}`, data);
    }

    public deleteOrder(idDoPedido: number): Observable<any> {
        const headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.delete(`${URL_API}/pedidos/${idDoPedido}`);
    }
}