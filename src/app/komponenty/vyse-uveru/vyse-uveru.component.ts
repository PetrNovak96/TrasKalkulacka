import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `    
    <div class="row" style="margin-bottom: 35px; margin-top: 30px">
      <div class="col-md-4">
        <p>Výše úvěru
        <napoveda pozice="right" [tooltip]="napoveda"></napoveda></p>
      </div>
      <div class="col-md-6">
        <input #textVyseUveru type="text" class="form-control" [value]="ukNumberToString(vyseUveru)" (change)="fire()">
      </div>
      <div class="col-md-2" style="text-align: left">
        <p> {{jednotek}} </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>{{min + " " + jednotek}}</p>
        <input [(ngModel)]="vyseUveru"
               type="range"
               [step]="krok"
               [min]="min"
               [max]="max"
        >
        <p>{{max + " " + jednotek}}</p>
      </div>
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
