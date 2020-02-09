import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  static requestQueue = 0;
  private spinnerSubject = new Subject<Spinnerstate>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  show() {
    this.spinnerSubject.next({ show: true } as Spinnerstate);
    SpinnerService.requestQueue++;
  }

  hide() {
    SpinnerService.requestQueue--;
    if (SpinnerService.requestQueue === 0) {
        this.spinnerSubject.next({ show: false } as Spinnerstate);
    }
  }
}

export interface Spinnerstate {
  show: boolean;
}
