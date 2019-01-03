import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //o componente recupera os dados da requisição http para API REST(banco-de-dados.json)
    //dessa forma conseguimos fazer o data binding e alinhar o template(que em outro momento estava estatico)
    this.ofertasService.getOfertasPorCategoria('diversao')
      .subscribe(( ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
    }
}
