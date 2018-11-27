import { Component, Input, OnInit } from '@angular/core';
import { formatujCislo } from '../../shared/formaty';

@ Component({
  selector: 'mesicni-splatka',
  template: `
    <p class="txtWhite txtWeightNorm">
      Měsíční splátka
    </p>
    <p class="txtWhite"  style="font-size: 28px" *ngIf="(vysledek != undefined)">
      {{this.numberToString(vysledek) + " Kč"}}
    </p>
    <div class="pojisteniZajem"><p *ngIf="jePojisteni" class="txtWhite txtWeightNorm">{{this.pojisteniInfo}}</p></div>
    <p class="txtWhite txtWeightNorm">U tohoto úvěru <b style="color: #00CC33">nepožadujeme</b> uvést jeho účel a můžete ho kdykoliv předčasně splatit.</p>
    <hr color="white">
  `,
  styleUrls: ['./mesicni-splatka.component.css']
})
export class MesicniSplatkaComponent implements OnInit {

  @Input('mesicniSplatka') public vysledek: number;
  @Input() public jePojisteni: boolean;
  public pojisteniInfo: string;

  constructor() { }

  ngOnInit() {
    this.pojisteniInfo = "+ 150 Kč/ měsíčně pojištění proti neschopnosti splácet";
  }

  numberToString(neco: number){
    return  formatujCislo(neco);
  }

}
