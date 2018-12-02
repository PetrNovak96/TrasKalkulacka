import {Component, Input, OnInit} from '@angular/core';
import { naProcenta } from '../../shared/formaty';

@Component({
  selector: 'sazba',
  template: `
    <div class="row">
      <div class="col-md-1" *ngIf="(urokovaMira != undefined)">
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: left">
        <p class="txtWhite">Úroková sazba
          <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda>
        </p>
        
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
export class SazbaComponent implements OnInit{

  @Input() public urokovaMira: number;
  public napoveda: string;
  public barvaNapovedy: string;

  constructor() { }

  ngOnInit(): void {
    this.napoveda = "Úroková sazba per annum.";
    this.barvaNapovedy = "bila";
  }

  naProcenta(neco: number) {
    return naProcenta(neco);
  }



}
