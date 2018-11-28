import { Component, Input } from '@angular/core';
import { naProcenta } from '../../shared/formaty';

@Component({
  selector: 'sazba',
  template: `
    <div class="row">
      <div class="col-md-1" *ngIf="(urokovaMira != undefined)">
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: left">
        <p class="txtWhite">Úroková sazba</p>
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: right">
        <p class="txtWhite">{{naProcenta(urokovaMira)}}</p>
      </div>
      <div class="col-md-1">
      </div>
    </div>
  `,
  styles: []
})
export class SazbaComponent {

  @Input() public urokovaMira: number;

  constructor() { }

  naProcenta(neco: number) {
    return naProcenta(neco);
  }

}
