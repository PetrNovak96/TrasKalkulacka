import { Component, Input, OnInit } from '@angular/core';
import { naProcenta } from '../../shared/formaty';

@Component({
  selector: 'RPSN',
  template: `
    <div class="row">
      <div class="col-md-1" *ngIf="(vysledek != undefined)">
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: left">
        <p class="txtWhite">RPSN
          <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda>
        </p>
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: right">
        <p class="txtWhite">{{naProcenta(vysledek)}}</p>
      </div>
      <div class="col-md-1">
      </div>
    </div>
  `,
  styleUrls: ['./rpsn.component.css']
})
export class RPSNComponent implements OnInit {

  public napoveda: string;
  public barvaNapovedy: string;
  @Input('rpsn')public vysledek: number;

  constructor() { }

  ngOnInit() {
    this.napoveda = "Tady se musíme dohodnout co přesně tam napsat.";
    this.barvaNapovedy = "bila";
  }

  naProcenta(neco: number) {
    return naProcenta(neco);
  }

}
