import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email.validator';
import { telCisloValidator } from '../../shared/telCislo.validator';
import { OdeslaniUdajuService } from '../../services/odeslani-udaju.service';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialog } from '../dialog/dialog.component';
import { KonfiguraceService } from '../../services/konfigurace.service';
import { bezCislic, telefonFiltr } from '../../shared/formaty';
import { OknoService } from '../../services/okno.service';

@Component({
  selector: 'kontaktni-formular',
  template: `
    <div class="row">
      <div class="col-md-12">
        <h2 class="formularH2">
          Kontaktní údaje
        </h2>
      </div>
    </div>
    
    <form [formGroup]="this.kontaktniUdaje">
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-4 formularCol">
          <p>
            Jméno
            <input #jmenoTextField 
                   type="text"
                   style="margin-bottom: -5px"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': jmenoControl.invalid && jmenoControl.touched
                   }"
                   [placeholder]="this.jmenoPlaceholder" 
                   (input)="jmenoOnInputEvent($event)"
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
        </div>
          <div class="col-md-2">
          </div>
          <div class="col-md-4 formularCol">
            <p>
              Příjmení
              <input #prijmeniTextField
                     type="text"
                     style="margin-bottom: -5px"
                     [ngClass]="{
                     'form-control': true,
                     'is-invalid': prijmeniControl.invalid && prijmeniControl.touched
                   }"
                     [placeholder]="this.prijmeniPlaceholder" 
                     (input)="prijmeniOnInputEvent($event)"
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
          </div>
          <div class="col-md-1">
          </div>
      </div>
      
      
          <div class="row">
            <div class="col-md-1">
            </div>
            <div class="col-md-4 formularCol">
          <p>
            Email
            <input #emailTextField
                   type="text"
                   style="margin-bottom: -5px"
                   [(ngModel)]="this.email"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': emailControl.invalid && emailControl.touched
                   }"
                   placeholder="@"
                   (click)="this.EmailOnClickEvent()"
                   formControlName="email"
                   maxlength="30">
            
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
        <div class="col-md-4 formularCol">
          <p>
            Telefonní číslo
            <input #telCisloTextField
                   type="text"
                   style="margin-bottom: -5px"
                   [ngClass]="{
                     'form-control': true,
                     'is-invalid': telCisloControl.invalid && telCisloControl.touched
                   }"
                   [placeholder]="this.telPlaceholder"
                   (click)="telOnClickEvent($event)"
                   [(ngModel)]="this.telCislo"
                   (input)="telOnInputEvent($event)"
                   formControlName="telCislo"
                   maxlength="16">

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
        <div class="col-md-10 doplnujiciInfoCol">
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
          <div class="col-md-10 doplnujiciInfoCol">
            
              <textarea rows="4" #doplnInfoTextArea 
                        [maxlength]="this.maxdelka"
                        class="doplnujiciInfo"
                        (input)="onInputDopln()"
                        [(ngModel)]="this.doplnujiciInfo"
                        [ngClass]="{
                     'doplnInfo': true,
                     'form-control': true,
                     'is-invalid': doplnInfoControl.invalid && doplnInfoControl.touched
                    }"
                        formControlName="doplnInfo"
              ></textarea>
            <p *ngIf="this.zobrazitCounter">
              
              <small class="text-primary">
                {{this.doplnInfoInput.nativeElement.value.length + "/" + this.maxdelka}}
              </small>
              
            </p>
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
export class KontaktniFormularComponent implements OnInit, AfterViewInit {

  @Input('rodic') hlavniKomponenta;

  public email: string;
  @ViewChild('emailTextField') emailInput;

  public telCislo: string;
  @ViewChild('telCisloTextField') telInput;
  @ViewChild('jmenoTextField') jmenoInput;
  @ViewChild('prijmeniTextField') prijmeniInput;

  @ViewChild('doplnInfoTextArea') doplnInfoInput;
  public zobrazitCounter: boolean;
  private sjeto: boolean;
  public maxdelka: number;
  public zobrazitCounterPo: number;

  @ViewChild('counter') counter;

  public doplnujiciInfo: string;

  public kontaktniUdaje: FormGroup;

  public udajeKOdeslani: object;

  public odeslaniStatus: string;

  public jmenoPlaceholder: string;

  public prijmeniPlaceholder: string;

  public telPlaceholder: string;

  constructor(private fb: FormBuilder,
              private _odeslaniUdaju: OdeslaniUdajuService,
              public dialog: MatDialog,
              private konfigurace: KonfiguraceService, private oknoServisa: OknoService) {

    this.kontaktniUdaje = this.fb.group({
      jmeno: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      prijmeni: ['', [Validators.required, ]],
      telCislo: ['', [Validators.required, telCisloValidator]],
      doplnInfo: ['']
    });
  }

  ngOnInit() {
    this.email = "";
    this.telCislo = "";
    this.doplnujiciInfo = "";
    this.maxdelka = 1000;
    this.zobrazitCounterPo = 900;
    this.odeslaniStatus = "";
    this.jmenoPlaceholder = this.konfigurace.jmenoPlaceholder;
    this.prijmeniPlaceholder = this.konfigurace.prijmeniPlaceholder;
    this.telPlaceholder = this.konfigurace.telPlaceholder;
    this.sjeto = false;
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
      let newVal = this.telPlaceholder;
      el.value = newVal;
      el.setSelectionRange(newVal.length, newVal.length);
    }
  }

  telOnInputEvent(){
    let pom = this.telInput.nativeElement.value;
    this.telInput.nativeElement.value = telefonFiltr(pom);
  }

  jmenoOnInputEvent(){
    let pom = this.jmenoInput.nativeElement.value;
    this.jmenoInput.nativeElement.value = bezCislic(pom);
  }

  prijmeniOnInputEvent(){
    let pom = this.prijmeniInput.nativeElement.value;
    this.prijmeniInput.nativeElement.value = bezCislic(pom);
  }

  onSubmit(){
    if (this.kontaktniUdaje.valid) {

      this.udajeKOdeslani = {
        "parametryKalkulacky": this.hlavniKomponenta.parametryKalkulacky,
        "kontaktniUdaje": this.kontaktniUdaje.value
      }

     this._odeslaniUdaju.odeslaniUdaju(this.udajeKOdeslani)
       .subscribe(
         response => {
           console.log('Success!', response);
           this.odeslaniStatus = "OK";
           this.otevriPopUp();
           },
        error => {
           console.log('Error!', error);
           this.odeslaniStatus = "NOK";
           this.otevriPopUp();
         }
       );

       // console.log("Data odeslána na server.", this.udajeKOdeslani);
       // this.odeslaniStatus = "OK";
       // this.otevriPopUp();

    } else {
      this.validateAllFormFields(this.kontaktniUdaje);
    }


  }

  otevriPopUp(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {status: this.odeslaniStatus}
    });

    dialogRef.afterClosed().subscribe(() => {

    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onInputDopln(){
    let vepsanoZnaku = this.doplnInfoInput.nativeElement.value.length
    if(vepsanoZnaku >= this.zobrazitCounterPo){
      this.zobrazitCounter = true;
    } else {
      this.zobrazitCounter = false;
    }
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

  ngAfterViewInit(): void {
    this.oknoServisa.skrolujDolu();
    this.jmenoInput.nativeElement.focus();
  }

}
