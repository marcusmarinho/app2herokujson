import { Component, OnInit } from '@angular/core'
import { OfertasService } from '../oferta/ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import '../util/rxjs-extensions'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})

export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  //Como estamos lidando com Observable precisamos converter o nosso objeto do type (Object)para Observable              
  public ofertas: Observable<Oferta[]>
  // Objeto para fazer o databiding das informações
  /*substituido pela pipe async
  public ofertas2: Oferta[]
  */
  //Recebe parametros e implementa alguma logica, neste caso este subject vai receber o parametro de pesquisa
  private subjectPesquisa: Subject<string> = new Subject<string>()

  
  ngOnInit() {
   
    this.ofertas = this.subjectPesquisa //retorno de Oferta[]
      .debounceTime(1000) //Dispara o funcao switchMap depois de um segundo
      .distinctUntilChanged()//Parametro de pesquisa seja identico ao anterior a aplicação na faz outra requisição
      //Se inscreve no observable mais recente evitando o numero abusivo de requisições
      .switchMap((termo: string) => {
        console.log('Requisicao http para api')

        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Oferta[]>([])
      })
  }

  //TIPO OBSERVABLE
  public pesquisa(termoDaBusca: string): void {
    //Sempre que houver um novo termo de busca, next() vai enviar o ultimo termo para o subject
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
