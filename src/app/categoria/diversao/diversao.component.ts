import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../../oferta/ofertas.service';
import { Oferta } from '../../shared/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  ofertas$: Observable <Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    
    this.ofertas$ = this.ofertasService.getOfertasPorCategoria('diversao');
    
    }
}
