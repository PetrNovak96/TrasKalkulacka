import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RPSN',
  template: `
    <p class="txtWhite">RPSN</p>
    <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
    <p *ngIf="jeVysledek">{{vysledek + " %"}}</p>
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
