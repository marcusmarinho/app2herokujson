import { Component, OnInit } from '@angular/core'
import { OfferService } from '../offer/offer.service'
import { Offer } from '../shared/offer.model'
import { Observable ,  Subject } from 'rxjs'
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged"
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/of"
import { CartService } from '../order-purchase/cart.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfferService]
})

export class TopoComponent implements OnInit {

  constructor(private offersService: OfferService,
              private cartService: CartService) { }

  public offers
  
  private subjectPesquisa: Subject<string> = new Subject<string>()
  ngOnInit() {
   
    this.offers = this.subjectPesquisa 
      .debounceTime(1000) 
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        console.log('Requisicao http para api', termo)

        if (termo.trim() === '') {
          return Observable.of<Offer[]>([])
        }
        return this.offersService.searchOffer(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Offer[]>([])
      })

  }

  public search(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
