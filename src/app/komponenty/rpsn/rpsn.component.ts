import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'RPSN',
  template: `
    <div *ngIf="(vysledek != undefined)" class="row">
      <div class="col-md-1">
      </div>
      <div class="col-md-5" style="text-align: left">
         <p class="txtWhite">RPSN
          <napoveda pozice="right" [tooltip]="napoveda"></napoveda></p>
      </div>
      <div class="col-md-5" style="text-align: right">
        <p class="txtWhite" style="text-align: right" >{{vysledek + " %"}}</p>
      </div>
      <div class="col-md-1">
      </div>
    </div>
  `,
  styleUrls: ['./rpsn.component.css']
})
export class RPSNComponent implements OnInit {

  public napoveda: string;
  @Input('rpsn')public vysledek: number;

  constructor() { }

  ngOnInit() {
    this.napoveda = "Tady se musíme dohodnout co přesně tam napsat.";
  }

}
