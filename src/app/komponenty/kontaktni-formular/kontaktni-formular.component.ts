import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email.validator';
import { telCisloValidator } from '../../shared/telCislo.validator';

@Component({
  selector: 'kontaktni-formular',
  template: `
    <div class="row">
      <div class="col-md-12">
        <h2 style="color:#0B5499; text-align: center">
          Kontaktní údaje
        </h2>
      </div>
    </div>
    
    <form [formGroup]="this.kontaktniUdaje">
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-4">
          <p>
            Jméno
            <input type="text"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': jmenoControl.invalid && jmenoControl.touched
                   }"
                   placeholder="Petr"
                   formControlName="jmeno">
            
            <small *ngIf="jmenoControl.invalid && jmenoControl.touched">

              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(jmenoControl.errors.required)
                }">
                Vyplňte prosím toto pole.
              </small>

            </small>
          </p>
          <p>
            Email
            <input #emailTextField
                   type="text"
                   [(ngModel)]="this.email"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': emailControl.invalid && emailControl.touched
                   }"
                   placeholder="@"
                   (click)="this.EmailOnClickEvent()"
                   formControlName="email">
            
            <small *ngIf="emailControl.invalid && emailControl.touched">

              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(emailControl.errors.required)
                }">
                Vyplňte prosím toto pole.
              </small>

              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(emailControl.errors.nespravnyEmail) || emailControl.errors.required
                }">
                Zadejte prosím email ve správném formátu.
              </small>

            </small>

          </p>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-4">
          <p>
            Příjmení
            <input type="text"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': prijmeniControl.invalid && prijmeniControl.touched
                   }"
                   placeholder="Novák"
                   formControlName="prijmeni">
            
            <small *ngIf="prijmeniControl.invalid && prijmeniControl.touched">
              
              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(prijmeniControl.errors.required)
                }">
                Vyplňte prosím toto pole. 
              </small>
              
            </small>
          </p>
          <p>
            Telefonní číslo
            <input #telCisloTextField
                   type="text"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': telCisloControl.invalid && telCisloControl.touched
                   }"
                   placeholder="+420 602 123 456"
                   (click)="telOnClickEvent($event)"
                   [(ngModel)]="this.telCislo"
                   (input)="telOnInputEvent($event)"
                   formControlName="telCislo">

            <small *ngIf="telCisloControl.invalid && telCisloControl.touched">

              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(telCisloControl.errors.required)
                }">
                Vyplňte prosím toto pole.
              </small>

              <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(telCisloControl.errors.nespravneCislo) || telCisloControl.errors.required
                }">
                Zadejte prosím telefonní číslo ve správném formátu.
              </small>

            </small>
          </p>
        </div>
        <div class="col-md-1">
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10">
          <p>
            Doplňující informace
          </p>
        </div>
          <div class="col-md-1">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-10">
          <textarea maxlength="1000"
                    class="doplnujiciInfo"
                    [(ngModel)]="this.doplnujiciInfo"
                    [ngClass]="{
                     'doplnInfo': true,
                     'form-control': true,
                     'is-invalid': doplnInfoControl.invalid && doplnInfoControl.touched
                    }"
                    formControlName="doplnInfo"
          ></textarea>
          <p *ngIf="doplnInfoControl.invalid && doplnInfoControl.touched">
            <small [ngClass]="{
                      'text-danger': true,
                      'd-none': !(doplnInfoControl.errors?.required)
                }">
              Vyplňte prosím toto pole.
            </small>
          </p>
          </div>
          <div class="col-md-1">
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-md-10">
          <p style="font-weight: bolder; margin-top: 15px; text-align: center">Náš bankéř Vás bude kontaktovat do 24 hodin.</p>
          </div>
        <div class="col-md-1">
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10" style="text-align: center">
          <input (click)="onSubmit()" type="button" class="btn btn-success btn-lg" value="Odeslat"/>
        </div>
        <div class="col-md-1">
        </div>
      </div>
      
    </form>
  `,
  styleUrls: ['./kontaktni-formular.component.css']
})
export class KontaktniFormularComponent implements OnInit {

  public email: string;
  @ViewChild('emailTextField') emailInput;

  public telCislo: string;
  @ViewChild('telCisloTextField') telInput;

  public doplnujiciInfo: string;

  public kontaktniUdaje: FormGroup;

  constructor(private fb: FormBuilder) {
    this.kontaktniUdaje = this.fb.group({
      jmeno: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      prijmeni: ['', [Validators.required, ]],
      telCislo: ['', [Validators.required, telCisloValidator]],
      doplnInfo: ['', Validators.required]
    });
    //TODO: submitting form data https://www.youtube.com/watch?v=bHcQx4hCF_0&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=58
  }

  ngOnInit() {
    this.email = "";
    this.telCislo = "";
    this.doplnujiciInfo = "";
  }

  EmailOnClickEvent(){

    if(this.email.length==0){
      let el = this.emailInput.nativeElement;
      el.value = "@";
      el.setSelectionRange(0,0);
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

  onSubmit(){
    console.log(this.kontaktniUdaje.value);
    if (this.kontaktniUdaje.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.kontaktniUdaje);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  get jmenoControl(){
    return this.kontaktniUdaje.get('jmeno');
  }

  get prijmeniControl(){
    return this.kontaktniUdaje.get('prijmeni');
  }

  get emailControl(){
    return this.kontaktniUdaje.get('email');
  }

  get telCisloControl(){
    return this.kontaktniUdaje.get('telCislo');
  }

  get doplnInfoControl(){
    return this.kontaktniUdaje.get('doplnInfo');
  }

}
