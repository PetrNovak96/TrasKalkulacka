import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'doba-splaceni',
  template: `
    <div class="row" style="margin-bottom: 20px; margin-top: 10px">
      <div class="col-md-12">
        <table>
          <tr>
            <td class="tableNazev">
              <p>Doba splácení
              <napoveda pozice="right" [tooltip]="napoveda"></napoveda></p>
            </td>
            <td class="tableInput">
             <input type="text" 
               class="form-control"
               id="doba-splaceni"
               [(ngModel)]="dobaSplaceni" (change)="fireEvent($event)">
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
            <td class="tablePrepocetDoba">
              <p>tedy <b class="modre">{{thesRoku()}}</b>{{thesA()}}<b class="modre">{{thesMesicu()}}</b></p>
            </td>
            <td class="tableJednotka">
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
            <p>{{min + " " + jednotek}}</p>
          </div>
          <div class="col-md-6 posuvnikJednotkyRight">
            <p>{{max + " " + jednotek}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./doba-splaceni.component.css']
})
export class DobaSplaceniComponent implements OnInit {

  public napoveda: string;
  public jednotek: string;
  public min: number;
  public max: number;
  public krok: number;
  @Input('defaultDobaSplaceni') public default: number;
  public dobaSplaceni: number;
  @Output() zmenaDobySplaceniEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.dobaSplaceni = this.default;
    this.min = 24;
    this.max = 120;
    this.krok = 1;
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
    this.zmenaDobySplaceniEvent.emit(this.dobaSplaceni);
  }
}
