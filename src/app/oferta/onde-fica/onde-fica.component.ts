import { Component, OnInit } from '@angular/core'
//Import ActivatedRoute para que seja feito a recuperacao da rota pai (id da oferta)
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  public ondeFica: string = ''

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .subscribe((descricao: string) => {
          this.ondeFica = descricao
        })
    })
  }

}
