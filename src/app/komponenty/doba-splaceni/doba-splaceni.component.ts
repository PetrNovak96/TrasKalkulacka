import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doba-splaceni',
  template: `
    <p>
      Doba splácení
    </p>
    <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
    <p>{{min + " " + jednotek}}</p>
    <input [(ngModel)]="dobaSplaceni"
           type="range"
           [step]="krok"
           [min]="min"
           [max]="max"
    >
    <p>{{max + " " + jednotek}}</p>
    <input type="text" class="form-control" [(ngModel)]="dobaSplaceni">
    <p>{{jednotek}}</p>
    <p>tedy <b class="modre">{{thesRoku()}}</b>{{thesA()}}<b class="modre">{{thesMesicu()}}</b></p>
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

  thesRoku(){
    let roku = Math.floor(this.dobaSplaceni/12);
    let roky;
    switch (roku) {
      case 0: roky = ""; break;
      case 1: roky = roku + " rok"; break;
      case 2: case 3: case 4: roky = roku + " roky"; break;
      default: roky = roku + " let"; break;
    }

    return roky;
  }

  thesA(){
    let mesicu = this.dobaSplaceni % 12;
    let roku = Math.floor(this.dobaSplaceni/12);
    let a;
    a = (mesicu!=0&&roku!=0)? " a " : "";
    return a
  }

  thesMesicu(){
    let mesicu = this.dobaSplaceni % 12;
    let mesice;
    switch (mesicu) {
      case 0: mesice = ""; break;
      case 1: mesice = mesicu + " měsíc"; break;
      case 2: case 3: case 4: mesice = mesicu + " měsíce"; break;
      default: mesice = mesicu + " měsíců"; break;
    }
    return mesice;
  }
}
