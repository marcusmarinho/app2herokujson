import { Oferta } from '../shared/oferta.model'
import { Injectable } from '@angular/core'
import { URL_API } from '../app.api'
import { Observable } from 'rxjs'
import { tap, map } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';



@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas`)

    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
    }

    public getOfertasPorId(id: number): Observable<Oferta> {

        return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`)
            .pipe(
                map((ofer: Oferta) => {
                    return ofer[0]
                })
            )
    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {

        return this.http.get<Oferta>(`${URL_API}/como-usar?id=${id}`)
            .pipe(
                map((resp: Oferta)=> {
                    return resp[0].descricao
                })
            )
    }

    public getOndeFicaOfertaPorId(id: number): Observable<string> {

        return this.http.get<Oferta>(`${URL_API}/onde-fica?id=${id}`)
           .pipe(
               map((resp: Oferta )=>{
                   return resp[0].descricao
               })
           )
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {

        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((resp: Oferta[]) =>{
                    return resp
                })
            )
    }

    public consultaPedido(idDoPedido: number): Observable<any> {
        return this.http.get(`${URL_API}/pedidos?id=${idDoPedido}`)
          .pipe(
              map((resp: any ) =>{
                  return resp.id
              })
          )
    }
}
