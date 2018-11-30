import { Component, EventEmitter, Output } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { KonfiguraceService } from './services/konfigurace.service';
import { OknoService } from './services/okno.service';


@Component({
  selector: 'app-root',
  template: `

    <div class="container">
      <div class="row leftRightSideRow">
        <div class="col-md-1">
        </div>
        <div class="col-md-5 leftSide">
          <leva-strana>
            <vyse-uveru [defaultVyseUveru]="defaultVyseUveru"
                        (zmenaVyseUveruEvent)="zmenaVyseUveruEvent($event)">
            </vyse-uveru>
            <doba-splaceni [defaultDobaSplaceni]="defaultDobaSplaceni"
                           (zmenaDobySplaceniEvent)="zmenaDobySplaceniEvent($event)">
            </doba-splaceni>
            <pojisteni [defaultOdskrkle]="defaultJePojisteni"
                       (zmenaOdskrknutiEvent)="zmenaOdskrknutiEvent($event)">
            </pojisteni>
          </leva-strana>
        </div>
        <div class="col-md-5 rightSide">
          <prava-strana (kontaktujteMeEvent)="kontaktujteMeEvent($event)" 
                        [zobrazFormular]="this.zobrazFormular">
            <mesicni-splatka [mesicniSplatka]="mesicniSplatka"
                             [jePojisteni]="this.jePojisteni" [mesicniPriplatek]="this.mesicniPriplatek">
            </mesicni-splatka>
            <sazba [urokovaMira]="urokovaMira"></sazba>
            <RPSN [rpsn]="RPSN"></RPSN>
            <celkem [zaplatiteCelkem]="zaplatiteCelkem"></celkem>
          </prava-strana>
        </div>
        <div class="col-md-1">
        </div>
      </div>

      <div class="row formularRow">
        <div class="col-md-1">
        </div>
        <div class="col-md-10 formular"><kontaktni-formular [rodic]="this" *ngIf="this.zobrazFormular"></kontaktni-formular></div>
        <div class="col-md-1">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public defaultVyseUveru: number;
  public defaultDobaSplaceni: number;
  public defaultJePojisteni: boolean;

  private _urokovaMira: number;
  private _vyseUveru: number;
  public dobaSplaceni: number;
  public jePojisteni: boolean;
  public koeficientUrokovaSazba: number;
  public koeficientVyseUveru: number;


  public poplatkyVyrizeni: number;


  public zobrazFormular: boolean = false;

  constructor(public gateway: GatewayService,
              private konfigurace: KonfiguraceService,
              private oknoServisa: OknoService) {

    //Mock server vrací úrokovou míru per anum
   // this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
   //   this._urokovaMira = data.interestRate;
   //  });
     this._urokovaMira = 0.08;

    this.poplatkyVyrizeni = konfigurace.poplatek;

    this.defaultDobaSplaceni = konfigurace.defaultDoba;
    this.defaultVyseUveru = konfigurace.defaultUver;
    this.defaultJePojisteni = konfigurace.defaultPojisteni;
    this.koeficientUrokovaSazba = konfigurace.pojisteniKoeficientUrokovaSazba;
    this.koeficientVyseUveru = konfigurace.koeficientVyseUveru;

    this.dobaSplaceni = this.defaultDobaSplaceni;
    this._vyseUveru = this.defaultVyseUveru;
    this.jePojisteni = this.defaultJePojisteni;
  }

  get parametryKalkulacky()
    : object
  {
    let parametry = {
      "vyseUveru": this.vyseUveru,
      "dobaSplaceni": this.dobaSplaceni,
      "jePojisteni": this.jePojisteni
    }
    return parametry
  }

  get mesicniSplatka(){

    let q = 1 + (this.urokovaMira/12);
    let U = this.vyseUveru;
    let n = this.dobaSplaceni;
    let qNaN = Math.pow(q, n);

    let S = U * ((qNaN*(q - 1))/(qNaN - 1));

    return Math.ceil(S);
  }

  get RPSN(){

    let r = this.urokovaMira;

    let APR = (Math.pow(1+(r/12), 12)) - 1;

    return APR;
  }

  get zaplatiteCelkem(){

    let S = this.mesicniSplatka;
    let n = this.dobaSplaceni;
    let F = this.poplatkyVyrizeni + (this.dobaSplaceni*this.mesicniPriplatek);

    let SUMA = S*n + F;

    return Math.ceil(SUMA);
  }

  get urokovaMira(){
    return (this.jePojisteni)?
      (this._urokovaMira - this.koeficientUrokovaSazba) : this._urokovaMira;
  }

  get vyseUveru(){
    return this._vyseUveru;
  }

  get mesicniPriplatek(){
    return Math.round(this._vyseUveru*this.koeficientVyseUveru);
  }

  kontaktujteMeEvent(event){

    this.zobrazFormular = event;
  }

  zmenaVyseUveruEvent(event){

    this._vyseUveru = event;
  }

  zmenaDobySplaceniEvent(event){
    this.dobaSplaceni = event;
  }

  zmenaOdskrknutiEvent(event){

    this.jePojisteni = event;
  }






}
