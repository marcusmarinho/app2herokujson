import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
  //Inclusao de servicos services utilizando metadado providers
  providers: []

})
export class RodapeComponent implements OnInit {
//variavel de acesso ao metodo criado na Classe OfertasService
  constructor() { }

  ngOnInit() {


  }

}
