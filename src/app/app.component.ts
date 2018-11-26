import { Component, OnInit } from '@angular/core';
import { GatewayService } from './services/gateway.service';
import { KonfiguraceService } from './services/konfigurace.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    
    <div class="container">
      <div class="row" style="margin-top: 50px;">
        <div class="col-md-1">
         </div>
        <div class="col-md-5 leftSide">
          <leva-strana>
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
        <div class="col-md-5 rightSide">
          <prava-strana (kontaktujteMeEvent)="kontaktujteMeEvent($event)">
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
      
      <div class="row" style="margin-top: 8px">
        <div class="col-md-1">
        </div>
        <div class="col-md-10 formular">
          <kontaktni-formular [rodic]="this" *ngIf="this.zobrazFormular"></kontaktni-formular>
        </div>
        <div class="col-md-1">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public defaultVyseUveru: number;
  public defaultDobaSplaceni: number;
  public defaultJePojisteni: boolean;

  public minVyseUveru: number;
  public minDobaSplaceni: number;

  public maxVyseUveru: number;
  public maxDobaSplaceni: number;

  public urokovaMira: number;
  public vyseUveru: number;
  public dobaSplaceni: number;
  public jePojisteni: boolean;

  public poplatky: number;


  public zobrazFormular: boolean = false;

  constructor(public gateway: GatewayService, private ctecka: KonfiguraceService) {

    //Mock server vrací úrokovou míru per anum
    this.gateway.getDemoPetrEndPoint({}).subscribe((data) => {
      this.urokovaMira = data.interestRate;
    });
    console.log(new Date().getTime())
    // this.urokovaMira = 0.08;

    this.poplatky = 490;

    this.defaultDobaSplaceni = 66;
    this.defaultVyseUveru = 1500000;
    this.defaultJePojisteni = false;

    this.dobaSplaceni = this.defaultDobaSplaceni;
    this.vyseUveru = this.defaultVyseUveru;
    this.jePojisteni = this.defaultJePojisteni;
    this.poplatky = 490;
  }

  ngOnInit() {
    // this.ctecka.getJSON().subscribe( (data) => {
    //   this.defaultVyseUveru = data.uver.default;
    //   this.defaultDobaSplaceni = data.dobaSplaceni.default;
    //   this.defaultJePojisteni = data.pojisteni.default;
    //
    //   this.minVyseUveru = data.uver.min;
    //   this.minDobaSplaceni = data.dobaSplaceni.min;
    //
    //   this.maxVyseUveru = data.uver.max;
    //   this.maxDobaSplaceni = data.dobaSplaceni.max;
    //   this.dobaSplaceni = this.defaultDobaSplaceni;
    //   this.vyseUveru = 1500000;
    //   this.jePojisteni = Boolean(this.defaultJePojisteni);
    // })
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

    let APR = (Math.pow(1+(r/12), 12)) - 1;

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
