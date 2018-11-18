import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `    
    <div class="row" style="margin-bottom: 30px">
          <div class="col-md-6">
            <label for="vyse-uveru">Výše úvěru</label>
            <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
          </div>
        <div class="col-md-4">
          <input #textVyseUveru
               type="text"
               id="vyse-uveru"
               class="form-control"
                    [value]="this.numberToString(this.vyseUveru)"
                    (input)="onInputEvent($event)"
                    (change)="onChangeEvent($event)">
        </div>
          <div class="col-md-1">
            <p> {{jednotek}}</p>
            <p>{{pomocna}}</p>
          </div>
        <div class="col-md-1">
        </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <input [(ngModel)]="vyseUveru"
               type="range"
               [step]="krok"
               [min]="min"
               [max]="max"
               (change)="fireEvent($event)"
        >
        <div class="row">
          <div class="col-md-6" style="text-align: left; font-weight: normal">
            <p>{{min + " " + jednotek}}</p>
          </div>
          <div class="col-md-6" style="text-align: right; font-weight: normal">
            <p>{{max + " " + jednotek}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vyse-uveru.component.css']
})
export class VyseUveruComponent implements OnInit {

  public napoveda: string;

  public pomocna: number;

  public vyseUveru: number;
  @Output() zmenaVyseUveruEvent = new EventEmitter();
  public min: number;
  public max: number;
  public krok: number;
  @Input('defaultVyseUveru') public default: number;
  public jednotek: string;
  @ViewChild('textVyseUveru') input;

  constructor() {

  }

  ngOnInit() {
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.vyseUveru = this.default;
    this.min = 30000;
    this.max = 3300000;
    this.krok = 10000;
    this.jednotek = "Kč";
  }

  numberToString(neco: number){
    return  neco.
    toString().
    replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }

  fireEvent(){

    this.vyseUveru =  Math.round(
      Number(
          this.
          input.
          nativeElement.
          value.
          toString().
          replace(/\s/g, "")
      )/1000
    )*1000;

    this.input.nativeElement.value = this.numberToString(this.vyseUveru);
    this.zmenaVyseUveruEvent.emit(this.vyseUveru);
  }

  onInputEvent(){
    this.vyseUveru = Number(
        this.
        input.
        nativeElement.
        value.
        toString().
        replace(/\s/g, ""));
  }

  onChangeEvent(){
    this.vyseUveru =  Math.round(
      this.vyseUveru/1000
    )*1000;

    this.zmenaVyseUveruEvent.emit(this.vyseUveru);
  }

}
