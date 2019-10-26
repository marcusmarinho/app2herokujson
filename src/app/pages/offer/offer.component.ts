import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
  // Import do modelo para que seja feito o databiding/interpolation

import { Offer } from '../../shared/models/offer.model';
import { CartService } from '../../shared/services/cart.service';
import { OfferService } from '../../shared/services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})

export class OfferComponent implements OnInit {

  public offer: Offer;

  constructor(private route: ActivatedRoute,
              private offerService: OfferService,
              private carrinhoService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.offerService.getOfferById(parametros.id)
        .subscribe((oferta: Offer) => {
          this.offer = oferta;
        });
    });
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.offer);
  }
}
