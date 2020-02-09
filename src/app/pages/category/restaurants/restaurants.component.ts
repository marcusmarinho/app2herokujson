import { Component, OnInit } from '@angular/core';
import { OfferService} from '../../../shared/services/offer.service';
import { Offer } from '../../../shared/models/offer.model';
import { Observable } from 'rxjs';
import { slideInAnimation } from 'src/app/animation';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  animations: [slideInAnimation]
})

export class RestaurantsComponent implements OnInit {

  public animationFlag = 'created';

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offer$ = this.offerService.getOfferByCategory('restaurante');
  }
}
