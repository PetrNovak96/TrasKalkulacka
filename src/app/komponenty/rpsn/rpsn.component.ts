import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RPSN',
  template: `
    <div class="row">
      <div class="col-md-1">
      </div>
      <div class="col-md-5" style="text-align: left">
         <p class="txtWhite">RPSN
          <napoveda pozice="right" [tooltip]="napoveda"></napoveda></p>
      </div>
      <div class="col-md-5" style="text-align: right">
        <p class="txtWhite" style="text-align: right" *ngIf="jeVysledek">{{vysledek + " %"}}</p>
      </div>
      <div class="col-md-1">
      </div>
    </div>
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
