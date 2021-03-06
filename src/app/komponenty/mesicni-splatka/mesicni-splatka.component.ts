import { Component, Input} from '@angular/core';
import { formatujCislo } from '../../shared/formaty';

@ Component({
  selector: 'mesicni-splatka',
  template: `
    <p class="txtWhite txtWeightNorm">
      Měsíční splátka
    </p>
    <p class="txtWhite mesicniSplatkaValue"  style="font-size: 28px" *ngIf="(vysledek != undefined)">
      {{this.numberToString(vysledek) + " Kč"}}
    </p>
    <div class="pojisteniZajem"><p *ngIf="jePojisteni" class="txtWhite txtWeightNorm">{{this.pojisteniInfo}}</p></div>
    <p class="txtWhite txtWeightNorm">U tohoto úvěru <b style="color: #00CC33">nepožadujeme</b> uvést jeho účel a můžete ho kdykoliv předčasně splatit.</p>
    <hr color="white">
  `,
  styleUrls: ['./mesicni-splatka.component.css']
})
export class MesicniSplatkaComponent{

  @Input('mesicniSplatka') public vysledek: number;
  @Input() public jePojisteni: boolean;
  @Input() public mesicniPriplatek: number;

  constructor() {
  }

  get pojisteniInfo() {
    return "+ " + this.mesicniPriplatek + " Kč/ měsíčně pojištění proti neschopnosti splácet";
  }

  numberToString(neco: number) {
    return formatujCislo(neco);
  }
}


