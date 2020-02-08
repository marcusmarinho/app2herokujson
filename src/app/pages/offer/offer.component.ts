import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Offer } from '../../shared/models/offer.model';
import { CartService } from '../../shared/services/cart.service';
import { OfferService } from '../../shared/services/offer.service';
import { Observable} from 'rxjs';
import { take} from 'rxjs/operators';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent implements OnInit {

  public offer$: Observable<Offer>;
  public offerVal: Offer;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private carrinhoService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
     this.offer$ = this.offerService.getOfferById(parametros.id);
     this.offerService.getOfferById(parametros.id).pipe(take(1))
     .subscribe(offer => this.offerVal = offer);
    });
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.offerVal);
  }
}
