import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer/offer.service';
import { Offer } from '../shared/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public imgs = [
    {
      src: '/assets/ofertas/1/img1.jpg'
    },
    {
      src: '/assets/ofertas/1/img2.jpg'
    },
    {
      src: '/assets/ofertas/1/img3.jpg'
    },
    {
      src: '/assets/ofertas/1/img4.jpg'
    },

    {
      src: '/assets/ofertas/2/img1.jpg'
    },
    {
      src: '/assets/ofertas/2/img2.jpg'
    },
    {
      src: '/assets/ofertas/2/img3.jpg'
    },
    {
      src: '/assets/ofertas/2/img4.jpg'
    },

    {
      src: '/assets/ofertas/3/img1.jpg'
    },
    {
      src: '/assets/ofertas/3/img2.jpg'
    },
    {
      src: '/assets/ofertas/3/img3.jpg'
    },
    {
      src: '/assets/ofertas/3/img4.jpg'
    },

    {
      src: '/assets/ofertas/4/img1.jpg'
    },
    {
      src: '/assets/ofertas/4/img2.jpg'
    },
    {
      src: '/assets/ofertas/4/img3.jpg'
    },
    {
      src: '/assets/ofertas/4/img4.jpg'
    },
    {
      src: '/assets/ofertas/4/img5.jpg'
    },
    {
      src: '/assets/ofertas/4/img6.jpg'
    },

    {
      src: '/assets/ofertas/5/img1.jpg'
    },
    {
      src: '/assets/ofertas/5/img2.jpg'
    },

    {
      src: '/assets/ofertas/6/img1.jpg'
    },
    {
      src: '/assets/ofertas/6/img2.jpg'
    }

  ];

  offer$: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
     this.offer$ = this.offerService.getOffer();
  }

}
