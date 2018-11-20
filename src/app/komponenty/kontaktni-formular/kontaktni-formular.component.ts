import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'kontaktni-formular',
  template: `
    <div class="row">
      <div class="col-md-10">
        <h2 style="color:#0B5499">
         
        </h2>
      </div>
    </div>
      <div class="row">
        <div class="col-md-4">
          <p>
            Jméno
            <input type="text"
                   class="form-control"
                   placeholder="Petr">
          </p>
          <p>
            Email
            <input #emailTextField
                   type="text"
                   [(ngModel)]="this.email"
                   class="form-control"
                   placeholder="@"
                   (click)="this.EmailOnClickEvent()">
          </p>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-4">
          <p>
            Příjmení
            <input type="text" 
                   class="form-control" 
                   placeholder="Novák">
          </p>
          <p>
            Telefonní číslo
            <input #telCisloTextField
                   type="text"
                   class="form-control"
                   placeholder="+420 602 123 456"
                   (click)="telOnClickEvent($event)"
                   [(ngModel)]="this.telCislo"
                   (input)="telOnInputEvent($event)">
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10" style="margin-top: 20px">
          <p>
            Doplňující informace
          </p>
          <textarea class="doplnInfo"
                    maxlength="1000"
                    [(ngModel)]="this.doplnujiciInfo"
          ></textarea>
          <p>Náš bankéř Vás bude kontaktovat do 24 hodin.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10" style="text-align: center">
          <input type="button" class="btn btn-success btn-lg" value="Odeslat">
        </div>
      </div>
  `,
  styleUrls: ['./kontaktni-formular.component.css']
})
export class KontaktniFormularComponent implements OnInit {

  public email: string;
  @ViewChild('emailTextField') emailInput;

  public telCislo: string;
  @ViewChild('telCisloTextField') telInput;

  public doplnujiciInfo: string;


  constructor() {}

  ngOnInit() {
    this.email = "";
    this.telCislo = "";
    this.doplnujiciInfo = "";
  }

  EmailOnClickEvent(){

    if(this.email.length==0){
      let el = this.emailInput.nativeElement;
      el.value = "@";
      el.setSelectionRange(0,0)
    }
  }

  telOnClickEvent(){

    if(this.telCislo.length==0){
      let el = this.telInput.nativeElement;
      let newVal = "+420 ";
      el.value = newVal;
      el.setSelectionRange(newVal.length, newVal.length);
    }
  }

  telOnInputEvent(){
    let el = this.telInput.nativeElement;
    el.value = el.value.replace(/(\d{3})(\d)/g, "$1 $2");
  }

}
