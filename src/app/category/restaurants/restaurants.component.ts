import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../offer/offer.service';
import { Offer } from '../../shared/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit {

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offer$ = this.offerService.getOfferByCategory('restaurante');
  }
}
