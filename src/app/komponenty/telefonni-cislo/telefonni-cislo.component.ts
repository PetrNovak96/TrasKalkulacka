import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'telefonni-cislo',
  template: `
    <p>
      Telefonní číslo
    <input #telCisloTextField
           type="text" 
           class="form-control" 
           placeholder="+420 602 123 456" 
           (click)="onClickEvent($event)" 
           [(ngModel)]="this.telCislo" (input)="onInputEvent($event)">
    </p>
  `,
  styleUrls: ['./telefonni-cislo.component.css']
})
export class TelefonniCisloComponent implements OnInit {

  public telCislo: string;
  @ViewChild('telCisloTextField') input;

  constructor() { }

  ngOnInit() {
    this.telCislo = "";
  }

  onClickEvent(){

    if(this.telCislo.length==0){
      let el = this.input.nativeElement;
      let newVal = "+420 ";
      el.value = newVal;
      el.setSelectionRange(newVal.length, newVal.length);
    }
  }

  onInputEvent(){
    let el = this.input.nativeElement;
    el.value = el.value.replace(/(\d{3})(\d)/g, "$1 $2");
  }

}
