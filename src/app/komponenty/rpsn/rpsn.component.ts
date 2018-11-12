import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RPSN',
  template: `
    <p class="txtWhite">RPSN
    <napoveda pozice="right" [tooltip]="napoveda"></napoveda></p>
    <p class="txtWhite" style="text-align: right" *ngIf="jeVysledek">{{vysledek + " %"}}</p>
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
