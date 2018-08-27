import { Component, OnInit } from '@angular/core'
//Import ActivatedRoute para que seja feito a recuperacao da rota pai (id da oferta)
import { ActivatedRoute } from '@angular/router'
import { OfertasService} from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private ofertasService: OfertasService) { }

  public ondeFica : string = ''            

  ngOnInit() {

    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then(( resposta: any ) =>{
        this.ondeFica = resposta
      })
  }

}
