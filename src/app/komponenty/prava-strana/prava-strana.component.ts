import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prava-strana',
  template: `
    <div>
      <h2 class="txtWhite">{{this.nabizimeVam}}</h2>
      <mesicni-splatka></mesicni-splatka>
      <p *ngIf="jePojisteni">{{this.pojisteniInfo}}</p>
      <p>U tohoto úvěru <b style="color: #00CC33">nepožadujeme</b> uvést jeho účel </p>
      <p>a můžete ho kdykoliv předčasně splatit.</p>
      <hr width="400px">
      <RPSN></RPSN>
      <celkem></celkem>
      <ng-content></ng-content>
    </div>

  `,
  styleUrls: ['./prava-strana.component.css']
})
export class PravaStranaComponent implements OnInit {

  public nabizimeVam: string;
  public pojisteniInfo: string;
  public jePojisteni: boolean;

  constructor() {

  }

  ngOnInit() {
    this.nabizimeVam = "Nabízíme Vám";
    this.pojisteniInfo = "+ 150 Kč/ měsíčně pojištění proti neschopnosti splácet";
    this.jePojisteni = true;
  }

}
