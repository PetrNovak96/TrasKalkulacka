import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'celkem',
  template: `
    <table width="400px">
      <tr>
        <td width="29%" align="left">Zaplatíte celkem</td>
        <td align="left"><napoveda pozice="right" [tooltip]="napoveda"></napoveda></td>
        <td align="right" *ngIf="jeVysledek">{{vysledek + " Kč"}}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./celkem.component.css']
})
export class CelkemComponent implements OnInit {

  public napoveda: string;
  public vysledek: number;
  public jeVysledek: boolean;

  constructor() { }

  ngOnInit() {
    this.napoveda = "Tady se musíme dohodnout co přesně tam napsat.";
    this.vysledek = 0;
    this.jeVysledek = true;
  }

}
