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
            <vyse-uveru [defaultVyseUveru]="defaultVyseUveru" 
                        (zmenaVyseUveruEvent)="zmenaVyseUveruEvent($event)">
            </vyse-uveru>
            <doba-splaceni  [defaultDobaSplaceni]="defaultDobaSplaceni" 
                            (zmenaDobySplaceniEvent)="zmenaDobySplaceniEvent($event)">
            </doba-splaceni>
            <pojisteni [defaultOdskrkle]="defaultJePojisteni"
                       (zmenaOdskrknutiEvent)="zmenaOdskrknutiEvent($event)">
            </pojisteni>
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

  public defaultVyseUveru: number;
  public defaultDobaSplaceni: number;
  public defaultJePojisteni: boolean;

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

    this.defaultDobaSplaceni = 66;
    this.defaultVyseUveru = 1500000;
    this.defaultJePojisteni = false;

    this.dobaSplaceni = this.defaultDobaSplaceni;
    this.vyseUveru = this.defaultVyseUveru;
    this.jePojisteni = this.defaultJePojisteni;
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

  zmenaOdskrknutiEvent(event){
    this.jePojisteni = event;
  }

  getMesicniSplatku(){

  }

  getRPSN(){

  }

  getZaplatiteCelkem(){

  }
}
