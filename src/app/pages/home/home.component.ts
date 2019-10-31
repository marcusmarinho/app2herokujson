import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../shared/services/offer.service';
import { Offer } from '../../shared/models/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
     this.offer$ = this.offerService.getOffer();
  }

}