import { Component } from '@angular/core';
import { GatewayService } from './services/gateway.service';

@Component({
  selector: 'app-root',
  template: `
    
    <div class="container">
      <div class="row">
        <div class="col-md-1">
         </div>
        <div class="col-md-5" style="background-color: ghostwhite; border-bottom-color: #0B5499; border-bottom-style: solid;  padding-bottom: 30px">
          <leva-strana class="leftSide">
            <vyse-uveru (zmenaVyseUveruEvent)="zmenaVyseUveruEvent($event)"></vyse-uveru>
            <doba-splaceni (zmenaDobySplaceniEvent)="zmenaDobySplaceniEvent($event)"></doba-splaceni>
            <pojisteni></pojisteni>
          </leva-strana>
        </div>
        <div class="col-md-5" style="background-color: #0B5499">
          <prava-strana class="rightSide" (kontaktujteMeEvent)="kontaktujteMeEvent($event)">
            <mesicni-splatka [mesicniSplatka]="this.mesicniSplatka"></mesicni-splatka>
            <RPSN [rpsn]="this.rpsn"></RPSN>
            <celkem [zaplatiteCelkem]="this.zaplatiCelkem"></celkem>
          </prava-strana>
        </div>
        <div class="col-md-1">
          </div>
        </div>
      
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10 formular" style="background-color: ghostwhite">
          <kontaktni-formular *ngIf="this.zobrazFormular"></kontaktni-formular>
        </div>
        <div class="col-md-1">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public urokovaMira: number = 0;

  public vyseUveru: number;
  public dobaSplaceni: number;
  public jePojisteni: boolean;

  public mesicniSplatka: number;
  public rpsn: number;
  public zaplatiCelkem: number;

  public zobrazFormular: boolean = false;

  constructor(public gateway: GatewayService) {

    //Mock server vrací úrokovou míru per anum
    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.urokovaMira = data.interestRate;
    });

    this.rpsn = 5;
    this.zaplatiCelkem = 150;
    this.mesicniSplatka = 5;
  }

  kontaktujteMeEvent(event){
    this.zobrazFormular = event;
  }

  zmenaVyseUveruEvent(event){
    this.vyseUveru = event;
  }

  zmenaDobySplaceniEvent(event){
    this.dobaSplaceni = event;
  }
}
