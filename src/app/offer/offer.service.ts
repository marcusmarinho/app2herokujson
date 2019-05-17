import { Offer } from '../shared/offer.model'
import { Injectable } from '@angular/core'
import { URL_API } from '../app.api'
import { Observable } from 'rxjs'
import { map } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';



@Injectable()
export class OfferService {

    constructor(private http: HttpClient) { }

    public getOffer(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas`)

    }

    public getOfferByCategory(categoria: string): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?categoria=${categoria}`)
    }

    public getOfferById(id: number): Observable<Offer> {

        return this.http.get<Offer>(`${URL_API}/ofertas?id=${id}`)
            .pipe(
                map((ofer: Offer) => {
                    return ofer[0]
                })
            )
    }

    public getHowUseOfferById(id: number): Observable<string> {

        return this.http.get<Offer>(`${URL_API}/como-usar?id=${id}`)
            .pipe(
                map((resp: Offer)=> {
                    return resp[0].descricao
                })
            )
    }

    public getWhereIsOfferById(id: number): Observable<string> {

        return this.http.get<Offer>(`${URL_API}/onde-fica?id=${id}`)
           .pipe(
               map((resp: Offer )=>{
                   return resp[0].descricao
               })
           )
    }

    public searchOffer(termo: string): Observable<Offer[]> {

        return this.http.get<Offer[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                map((resp: Offer[]) =>{
                    return resp
                })
            )
    }

    public searchPedido(idDoPedido: number): Observable<any> {
        return this.http.get(`${URL_API}/pedidos?id=${idDoPedido}`)
          .pipe(
              map((resp: any ) => {
                  return resp.shift()
              })
           )
    }
    
}
