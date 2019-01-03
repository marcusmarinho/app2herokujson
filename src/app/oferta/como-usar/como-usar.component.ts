import { Component, OnInit } from '@angular/core';
//Import ActivatedRoute para que seja feito a recuperacao da rota pai (id da oferta)
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  //instancia para recuperar parametros do objeto
  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  public comoUsar: string = ''

  ngOnInit() {
    /*parent recupera a rota pai oferta id exemplo snapshot
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((resposta: string) => {
        this.comoUsar = resposta
      })
      Exemplo Subscribe
    */
     this.route.parent.params.subscribe(( parametros: Params) =>{
        this.ofertasService.getComoUsarOfertaPorId(parametros.id)
          .subscribe(( descricao: string) =>{
            this.comoUsar = descricao 
          })
     }) 
  }
}
