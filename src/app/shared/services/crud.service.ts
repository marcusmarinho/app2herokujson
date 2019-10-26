import { Order } from '../../shared/models/order.model';
import { environment } from '../../../environments/environment';
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
        return this.http.get(`${environment.host}/pedidos`, {params: params})
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

        return this.http.put(`${environment.host}/pedidos/${idDoPedido}`, data);
    }

    public deleteOrder(idDoPedido: number): Observable<any> {
        const headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.delete(`${environment.host}/pedidos/${idDoPedido}`);
    }
}