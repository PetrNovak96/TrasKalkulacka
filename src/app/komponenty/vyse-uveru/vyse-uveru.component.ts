import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `
    <div>
      <p>
        Výše úvěru
      </p>
      <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
      <p>{{min + " " + jednotek}}</p>
      <input [(ngModel)]="vyseUveru"
             type="range"
             [step]="krok"
             [min]="min"
             [max]="max"
      >
      <p>{{max + " " + jednotek}}</p>
      <input #textVyseUveru style="text-align: center" type="text" [value]="ukNumberToString(vyseUveru)" (change)="fire()">
      <p>{{jednotek}}</p>
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
  @ViewChild('textVyseUveru') input;

  constructor() { }

  ngOnInit() {
    this.default = 1500000;
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.vyseUveru = this.default;
    this.min = 30000;
    this.max = 3300000;
    this.krok = 10000;
    this.jednotek = "Kč";
  }

  ukNumberToString(neco: number){
    return  neco.
            toString().
            replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }

  fire(){
    this.vyseUveru =  Number(
                      this.
                      input.
                      nativeElement.
                      value.
                      toString().
                      replace(/\s/g, ""));
  }

}
