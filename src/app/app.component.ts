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
            <mesicni-splatka [mesicniSplatka]="getMesicniSplatku()"  
                             [jePojisteni]="this.jePojisteni">
            </mesicni-splatka>
            <RPSN [rpsn]="getRPSN()"></RPSN>
            <celkem [zaplatiteCelkem]="getZaplatiteCelkem()"></celkem>
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

  public urokovaMira: number;
  public vyseUveru: number;
  public dobaSplaceni: number;
  public poplatky: number;
  public jePojisteni: boolean;

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
    this.poplatky = 490;
  }

  getMesicniSplatku(){

    let q = 1 + (this.urokovaMira/12);
    let U = this.vyseUveru;
    let n = this.dobaSplaceni;
    let qNaN = Math.pow(q, n);

    let S = U * ((qNaN*(q - 1))/(qNaN - 1));

    return Math.ceil(S);
  }

  getRPSN(){

    let r = this.urokovaMira;
    if(this.jePojisteni){
      r = r - 0.01;
    }
    let U = this.vyseUveru;

    if(this.jePojisteni){
      let pojisteni = U * 0.001;
      U += pojisteni;
    }
    let F = this.poplatky;
    let roky = this.dobaSplaceni/12;

    let APR = ((U*r*roky)+F)
                    /
                (U*roky);

    return APR;
  }

  getZaplatiteCelkem(){

    let S = this.getMesicniSplatku();
    let n = this.dobaSplaceni;
    let F = this.poplatky;
    let pojisteni = 0;
    if(this.jePojisteni) {
      pojisteni = this.vyseUveru * 0.001;
    }

    let SUMA = S*n + F + pojisteni;

    return Math.ceil(SUMA);
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






}
