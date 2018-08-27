import { Component, OnInit} from '@angular/core';
import { OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .then(( ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
      .catch(( param: any) =>{
        console.log(param)
      })
    /*
    this.ofertas = this.ofertasService.getOfertas()
   // console.log(this.ofertas)
   this.ofertasService.getOfertas2()
   //then recupera a instancia de resolve..codificada em ofertas.service.ts
      .then((ofertas: Array<Oferta>) => {
        console.log('A funcao resolve passou por aqui depois de 3 segundos')
        this.ofertas = ofertas
      })
        .catch((param: any) => {
          console.log(param)
      })
      */
  }
}
