import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Offer } from '../shared/offer.model';
import { Observable, Subject } from 'rxjs';
import { CartService } from '../order-purchase/cart.service';
import { take } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
// import * as moment from 'moment';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [],
})

export class TopoComponent implements OnInit {

  constructor(private searchService: SearchService,
              public cartService: CartService) { }

  // isIntegracaoParceiro: Boolean = false;
  // diffSegundos: any = 0;
  // tempoSessao: string = '';
  // intervalId: any = null;

  // is_menu_verifica;
  // is_menu_cnpj = true;

  public offers;
  public counter = 0;
  public termoDaPesquisa;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  ngOnInit() {
    // this.intervalId = setInterval(() => this.gerenciarSessao(), 1000);
    // if (JSON.parse(window.sessionStorage.getItem('user'))) {
    //   this.is_menu_verifica = JSON.parse(window.sessionStorage.getItem('user')).identificador;
    //   this.is_menu_cnpj = this.is_menu_verifica.length === 11 ? false : true;
    // }

    this.offers = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {

        if (termo.trim() === '') {
          return Observable.of<Offer[]>([]);
        }

        return this.searchService.searchOffer(termo);
      })
      .catch((err: any) => {
        console.log(err);
        return Observable.of<Offer[]>([]);
      });
  }

  public search(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

  getCartQtItens() {
    console.log('pegou quantidade');
    return this.cartService.getCartQt().pipe(take(1));
  }

  // gerenciarSessao() {
  //   this.diffSegundos = moment(this.getExpireDate()).diff(moment(), 'seconds');

  //   if (this.diffSegundos > 0) {
  //     this.tempoSessao = moment(1000 * this.diffSegundos).format('m:ss');
  //   } else {
  //     this.cancelInterval();
  //   }
  // }

  // cancelInterval() {
  //   clearInterval(this.intervalId);
  // }

  // public getExpireDate(): string {
  //   let user$ = sessionStorage.user;
  //   let user: any = {
  //     sessao: {

  //     }
  //   };
  //   if (user$) {
  //     user = JSON.parse(user$);
  //   }

  //   return user.sessao.data_expiracao;
  // }

}
