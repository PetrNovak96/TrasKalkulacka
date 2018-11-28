import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { KonfiguraceService } from '../../services/konfigurace.service';
import { formatujCislo } from '../../shared/formaty';


@Component({
  selector: 'doba-splaceni',
  template: `
    <div class="row dobaSplaceniRow">
      <div class="col-md-12">
        <table>
          <tr>
            <td class="tableNazev">
              <p>Doba splácení
              <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda></p>
            </td>
            <td class="tableInput">
             <input #textDobaSplaceni
               type="text" 
               class="form-control"
               id="doba-splaceni"
               [value]="numberToString(this.dobaSplaceni)"
               (change)="fireEvent($event)" 
               (input)="onInputEvent($event)">
            </td>
            <td class="tableJednotka">
              <p> {{jednotek}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    
    <div class="row prepocetDoba">
      <div class="col-md-12">
        <table>
          <tr>
            <td class="tableNazev">
            </td>
            <td colspan="2" class="tablePrepocetDoba">
              <p>tedy <b class="modre">{{thesRoku()}}</b>{{thesA()}}<b class="modre">{{thesMesicu()}}</b></p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <input [(ngModel)]="dobaSplaceni"
           type="range"
           [step]="krok"
           [min]="min"
           [max]="max"  
           (change)="fireEvent($event)" 
        >
        <div class="row">
          <div class="col-md-6 posuvnikJednotkyLeft">
            <p>{{numberToString(min) + " " + jednotek}}</p>
          </div>
          <div class="col-md-6 posuvnikJednotkyRight">
            <p>{{numberToString(max) + " " + jednotek}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./doba-splaceni.component.css']
})
export class DobaSplaceniComponent implements OnInit {

  public napoveda: string;
  public barvaNapovedy: string;
  public jednotek: string;
  public min: number;
  public max: number;
  public krok: number;
  @Input('defaultDobaSplaceni') public default: number;
  public dobaSplaceni: number;
  @Output() zmenaDobySplaceniEvent = new EventEmitter();
  @ViewChild('textDobaSplaceni') input;

  constructor(private konfigurace: KonfiguraceService) { }

  ngOnInit() {
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.barvaNapovedy = "cerna";
    this.dobaSplaceni = this.default;
    this.min = this.konfigurace.minDoba;
    this.max = this.konfigurace.maxDoba;
    this.krok = this.konfigurace.krokDoba;
    this.jednotek = "Měsíců";
    this.fireEvent();
  }

  thesRoku(){
    let roku = Math.floor(this.dobaSplaceni/12);
    let roky;
    switch (roku) {
      case 0: roky = ""; break;
      case 1: roky = roku + " rok"; break;
      case 2: case 3: case 4: roky = roku + " roky"; break;
      default: roky = roku + " let"; break;
    }

    return roky;
  }

  thesA(){
    let mesicu = this.dobaSplaceni % 12;
    let roku = Math.floor(this.dobaSplaceni/12);
    let a;
    a = (mesicu!=0&&roku!=0)? " a " : "";
    return a
  }

  thesMesicu(){
    let mesicu = this.dobaSplaceni % 12;
    let mesice;
    switch (mesicu) {
      case 0: mesice = ""; break;
      case 1: mesice = mesicu + " měsíc"; break;
      case 2: case 3: case 4: mesice = mesicu + " měsíce"; break;
      default: mesice = mesicu + " měsíců"; break;
    }
    return mesice;
  }

  fireEvent(){

    if(this.dobaSplaceni < this.min){

      this.dobaSplaceni = this.min;

    } else if (this.dobaSplaceni > this.max){

      this.dobaSplaceni = this.max;

    }
    this.zmenaDobySplaceniEvent.emit(this.dobaSplaceni);
  }

  onInputEvent(){

    let cislo = Number(this.input.nativeElement.value.replace(/\D|\./g, ""));
    this.input.nativeElement.value = formatujCislo(cislo);
    this.dobaSplaceni = cislo;
  }

  numberToString(neco: number){
    return formatujCislo(neco);
  }
}
