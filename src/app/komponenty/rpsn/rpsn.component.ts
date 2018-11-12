import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RPSN',
  template: `
    <table width="400px">
      <tr>
        <td width="10%" align="left">RPSN</td>
        <td align="left"><napoveda pozice="right" [tooltip]="napoveda"></napoveda></td>
        <td align="right" *ngIf="jeVysledek" >{{vysledek + " %"}}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./rpsn.component.css']
})
export class RPSNComponent implements OnInit {

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
