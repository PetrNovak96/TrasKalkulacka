import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { numberToString, stringToNumber } from '../../shared/convertor';
import { KonfiguraceService } from '../../services/konfigurace.service';

@Component({
  selector: 'vyse-uveru',
  template: `    
    <div class="row" style="margin-bottom: 20px">
      <div class="col-md-12">
       <table>
        <tr>
          <td class="tableNazev">
            <p>Výše úvěru
            <napoveda pozice="right" [barva]="barvaNapovedy" [tooltip]="napoveda"></napoveda></p>
          </td>
          <td class="tableInput">
            <input #textVyseUveru
               type="text"
               id="vyse-uveru"
               class="form-control"
               [value]="this.numberToString(this.vyseUveru)"
               (input)="onInputEvent($event)"
               (change)="onChangeEvent($event)">
          </td>
          <td class="tableJednotka">
            <p> {{jednotek}}</p>
          </td>
         </tr>
        </table>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <input [(ngModel)]="vyseUveru"
               type="range"
               [step]="krok"
               [min]="min"
               [max]="max"
               (change)="onRangeChangeEvent($event)"
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
  styleUrls: ['./vyse-uveru.component.css']
})
export class VyseUveruComponent implements OnInit {

  public napoveda: string;
  public barvaNapovedy: string;
  public vyseUveru: number;
  @Output() zmenaVyseUveruEvent = new EventEmitter();
  public min: number;
  public max: number;
  public krok: number;
  @Input('defaultVyseUveru') public default: number;
  public jednotek: string;
  @ViewChild('textVyseUveru') input;

  constructor(private konfigurace: KonfiguraceService) {

  }

  ngOnInit() {
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.barvaNapovedy = "cerna";
    this.vyseUveru = this.default;
    this.min = this.konfigurace.minUver;
    this.max = this.konfigurace.maxUver;
    this.krok = this.konfigurace.krokUver;
    this.jednotek = "Kč";
  }

  numberToString(neco: number){
    return numberToString(neco);
  }

  onInputEvent(){

    // @ts-ignore
    if (event.data != null){
      // @ts-ignore
      if(event.data.match('^[0-9]+$')){

        this.vyseUveru = stringToNumber(this.
          input.
          nativeElement.
          value);

      } else {

        this.input.nativeElement.value =
          // @ts-ignore
          this.input.nativeElement.value.toString().replace(new RegExp(event.data.toString()),"");
      }
    } else {

      this.vyseUveru = stringToNumber(this.
        input.
        nativeElement.
        value);
    }
  }

  onChangeEvent(){

    if(this.input.nativeElement.value == "" ||
      stringToNumber(this.input.nativeElement.value) < this.min){

      this.vyseUveru = this.zaokrouhli(this.min);

    } else if (stringToNumber(this.input.nativeElement.value) > this.max){

      this.vyseUveru = this.zaokrouhli(this.max);

    } else {

      this.vyseUveru = this.zaokrouhli(this.vyseUveru);
    }
    this.zmenaVyseUveruEvent.emit(this.vyseUveru);
  }

  zaokrouhli(cislo: number)
    : number
  {
      return Math.round(cislo/this.krok)*this.krok;
  }

  onRangeChangeEvent(){

    this.zmenaVyseUveruEvent.emit(this.vyseUveru);
  }

}
