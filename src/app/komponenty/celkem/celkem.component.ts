import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'celkem',
  template: `
    <div *ngIf="(vysledek != undefined)" class="row celkemRow">
      <div class="col-md-1">
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: left">
        <p class="txtWhite">
          Zaplatíte celkem
          <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda> </p>
      </div>
      <div class="col-md-5 rpsnCol" style="text-align: right">
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
    this.napoveda = "Součet celkové výše spotřebitelského úvěru a " +
      "celkových nákladů spotřebitelského úvěru pro spotřebitele (úrok, poplatky).";
    this.barvaNapovedy = "bila";
  }

  numberToString(neco: number){
    return  neco.
    toString().
    replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }

}
