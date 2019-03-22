import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../oferta/ofertas.service';
import { Oferta } from '../../shared/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})

export class RestaurantesComponent implements OnInit {

  ofertas$: Observable <Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas$ = this.ofertasService.getOfertasPorCategoria('restaurante');
  }
}
