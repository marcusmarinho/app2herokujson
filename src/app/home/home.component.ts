import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer/offer.service';
import { Offer } from '../shared/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfferService]
})

export class HomeComponent implements OnInit {

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
     this.offer$ = this.offerService.getOffer();
  }
}
