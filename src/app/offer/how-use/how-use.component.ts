import { Component, OnInit } from '@angular/core';
//Import ActivatedRoute para que seja feito a recuperacao da rota pai (id da oferta)
import { ActivatedRoute, Params } from '@angular/router'
import { OfferService } from '../offer.service'

@Component({
  selector: 'app-how-use',
  templateUrl: './how-use.component.html',
  styleUrls: ['./how-use.component.scss'],
  providers: [OfferService]
})
export class HowUseComponent implements OnInit {
  //instancia para recuperar parametros do objeto
  constructor(private route: ActivatedRoute,
    private offerService: OfferService) { }

  public comoUsar: string = ''

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.offerService.getHowUseOfferById(parametros.id)
        .subscribe((descricao: string) => {
          this.comoUsar = descricao
        })
    })
  }
}
