import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `
    <div>
      <p>
        Výše úvěru
      </p>
      <img [matTooltip]="this.napoveda"
           matTooltipPosition="right"
           src="assets/otaznik.png"
           alt="Nápověda"
           width="15px"
           height="15px"
      >
      <p>{{this.min + " " + this.jednotek}}</p>
      <input [(ngModel)]="this.vyseUveru"
             type="range"
             [step]="this.krok"
             [min]="this.min"
             [max]="this.max"
      >
      <p>{{this.max + " " + this.jednotek}}</p>
      <input type="text" [(ngModel)]="this.vyseUveru">
      <p>{{this.jednotek}}</p>
    </div>
  `,
  styleUrls: ['./vyse-uveru.component.css']
})
export class VyseUveruComponent implements OnInit {

  public napoveda: string;
  public vyseUveru: number;
  public min: number;
  public max: number;
  public krok: number;
  public default: number;
  public jednotek: string;

  constructor() { }

  ngOnInit() {
    this.default = 1500000;
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.vyseUveru = this.default;
    this.min = 0;
    this.max = 150000;
    this.jednotek = "Kč";
  }

}
