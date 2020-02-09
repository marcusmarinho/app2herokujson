import { Component, OnInit } from '@angular/core';
import { SpinnerService, Spinnerstate } from './spinner.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  show;
  constructor(private spinnerService: SpinnerService) { }

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  ngOnInit() {
    this.spinnerService.spinnerState.subscribe((state: Spinnerstate) => {
      this.show = state.show;
    });
  }

}
