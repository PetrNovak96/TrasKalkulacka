import { Component, Input, OnInit } from '@angular/core';
import { numberToString } from '../../shared/convertor';

@Component({
  selector: 'celkem',
  template: `
    <div *ngIf="(vysledek != undefined)" class="row">
      <div class="col-md-1">
      </div>
      <div class="col-md-5" style="text-align: left">
       <p class="txtWhite">
        Zaplatíte celkem
       <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda> </p>
      </div>
      <div class="col-md-5" style="text-align: right">
       <p class="txtWhite" style="text-align: right" >{{numberToString(vysledek) + " Kč"}}</p>
      </div>
      <div class="col-md-1">
      </div>
    </div>
  `,
  styleUrls: ['./celkem.component.css']
})
export class CelkemComponent implements OnInit {

  public napoveda: string;
  public barvaNapovedy: string;
  @Input('zaplatiteCelkem')public vysledek: number;

  constructor() { }

  ngOnInit() {
    this.napoveda = "Tady se musíme dohodnout co přesně tam napsat.";
    this.barvaNapovedy = "bila";
  }

  numberToString(vysledek: number){

    return numberToString(vysledek);
  }



}
