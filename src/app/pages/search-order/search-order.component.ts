import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss']
})
export class SearchOrderComponent implements OnInit {

  public ofertas$: Observable<Offer[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.ofertas$ = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return of<Offer[]>([]);
        }
        return this.searchService.searchOffer(term);
      })
    );
  }

  public search(searchTerm: string): void {
    this.subjectPesquisa.next(searchTerm);
  }

  public eraseSearch(): void {
    this.subjectPesquisa.next('');
  }
}
