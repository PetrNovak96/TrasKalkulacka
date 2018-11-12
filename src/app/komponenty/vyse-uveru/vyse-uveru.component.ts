import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vyse-uveru',
  template: `
    <div>
      <table align="center" width="400px">
        <tr align="left">
          <td align="left" width="20%">Výše úvěru</td>
          <td align="left">
            <napoveda pozice="right" [tooltip]="napoveda"></napoveda>
          </td>
          <td align="right"><input #textVyseUveru style="text-align: center" 
                     type="text" [value]="ukNumberToString(vyseUveru)" (change)="fire()">
          </td>
          <td align="right">{{jednotek}}</td>
        </tr>
        <tr>
          <td colspan="4"><input width="50%" [(ngModel)]="vyseUveru"
                     type="range"
                     [step]="krok"
                     [min]="min"
                     [max]="max"
          ></td>
        </tr>
        <tr>
          <td align="left" colspan="2">{{min + " " + jednotek}}</td>
          <td align="right" colspan="2">{{max + " " + jednotek}}</td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./vyse-uveru.component.css']
})
export class VyseUveruComponent implements OnInit {

  public napoveda: string;
  public vyseUveru: number;
  public min: number;
  public max: number;
  public krok: number;
  public default: number;
  public jednotek: string;
  @ViewChild('textVyseUveru') input;

  constructor() { }

  ngOnInit() {
    this.default = 1500000;
    this.napoveda = "Vyplňte prosím toto pole, nebo vyberte na posuvníku.";
    this.vyseUveru = this.default;
    this.min = 30000;
    this.max = 3300000;
    this.krok = 10000;
    this.jednotek = "Kč";
  }

  ukNumberToString(neco: number){
    return  neco.
            toString().
            replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }

  fire(){
    this.vyseUveru =  Number(
                      this.
                      input.
                      nativeElement.
                      value.
                      toString().
                      replace(/\s/g, ""));
  }

}
