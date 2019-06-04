import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.scss'],
  providers: [OfferService]
})

export class WhereIsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ofertasService: OfferService) { }

  public ondefica;

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getWhereIsOfferById(parametros.id)
        .subscribe((descricao: string) => {
          this.ondefica = descricao;
        });
    });
  }
}
