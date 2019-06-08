import { Pedido } from './shared/pedido.model'
import { Injectable } from '@angular/core'
import { Observable } from '../../node_modules/rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../src/environments/environment';

@Injectable()
export class OrdemCompraService {

    baseURL: string;

    constructor(private http: HttpClient) { 
        this.baseURL = `${environment.API_ENDPOINT}`;
    }

    public efetivarCompra(pedido: Pedido): Observable<any> {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(
            `${this.baseURL}/pedidos`,
            JSON.stringify(pedido),
            { headers }
        )
            .map((resposta) => resposta.id as any);
    }

}