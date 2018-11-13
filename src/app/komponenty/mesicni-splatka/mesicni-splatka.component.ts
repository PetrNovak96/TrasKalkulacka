import { Component, Input, OnInit } from '@angular/core';

@ Component({
  selector: 'mesicni-splatka',
  template: `
    <p class="txtWhite">
      Měsíční splátka
    </p>
    <p class="txtWhite"  style="font-size: 28px; margin-bottom: 25px" *ngIf="(vysledek != undefined)">{{vysledek + " Kč"}}</p>
    <p *ngIf="jePojisteni">{{this.pojisteniInfo}}</p>
    <p>U tohoto úvěru <b style="color: #00CC33">nepožadujeme</b> uvést jeho účel </p>
    <p>a můžete ho kdykoliv předčasně splatit.</p>
    <hr color="white">
  `,
  styleUrls: ['./mesicni-splatka.component.css']
})
export class MesicniSplatkaComponent implements OnInit {

  @Input('mesicniSplatka') public vysledek: number;
  public jeVysledek: boolean;
  public jePojisteni: boolean;
  public pojisteniInfo: string;

  constructor() { }

  ngOnInit() {
    this.jeVysledek = false;
    this.pojisteniInfo = "+ 150 Kč/ měsíčně pojištění proti neschopnosti splácet";
    this.jePojisteni = true;
  }

}
