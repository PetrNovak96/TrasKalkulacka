import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prava-strana',
  template: `
    <div>
      <h2 class="txtWhite">{{this.nabizimeVam}}</h2>
      <ng-content></ng-content>
      
      
      <input type="button" class="btn btn-success btn-lg" value="Kontaktujte mě">
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
