import { Component, OnInit } from '@angular/core';
import { OfferService} from '../../offer/offer.service';
import { Offer } from '../../shared/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss'],
  providers: [ OfferService ]
})
export class FunComponent implements OnInit {

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offer$ = this.offerService.getOfferByCategory('diversao');
    }
}
