import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doba-splaceni',
  template: `
    <p>
      Doba splácení
    </p>
    <img [matTooltip]="this.napoveda"
         matTooltipPosition="right"
         src="assets/otaznik.png"
         alt="Nápověda"
         width="15px"
         height="15px"
    >
    <p>{{min + " " + jednotek}}</p>
    <input [(ngModel)]="dobaSplaceni"
           type="range"
           [step]="krok"
           [min]="min"
           [max]="max"
    >
    <p>{{max + " " + jednotek}}</p>
    <input type="text" [(ngModel)]="dobaSplaceni">
    <p>{{jednotek}}</p>
    <p>{{thesaurus()}}</p>
  `,
  styleUrls: ['./doba-splaceni.component.css']
})
export class DobaSplaceniComponent implements OnInit {

  public napoveda: string;
  public jednotek: string;
  public min: number;
  public max: number;
  public krok: number;
  public default: number;
  public dobaSplaceni: number;

  constructor() { }

  ngOnInit() {
    this.default = 66;
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.dobaSplaceni = this.default;
    this.min = 24;
    this.max = 120;
    this.jednotek = "měsíců";
  }

  thesaurus(){

    let roku = Math.floor(this.dobaSplaceni/12);
    let mesicu = this.dobaSplaceni % 12;

    let roky;
    let a;
    let mesice;

    switch (roku) {
      case 0: roky = ""; break;
      case 1: roky = roku + " rok"; break;
      case 2: case 3: case 4: roky = roku + " roky"; break;
      default: roky = roku + " let"; break;
    }

    switch (mesicu) {
      case 0: mesice = ""; break;
      case 1: mesice = mesicu + " měsíc"; break;
      case 2: case 3: case 4: mesice = mesicu + " měsíce"; break;
      default: mesice = mesicu + " měsíců"; break;
    }

    a = (mesicu!=0)? " a " : "";

    return "tedy " + roky + a + mesice;
  }

}
