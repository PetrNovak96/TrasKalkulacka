import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KonfiguraceService } from '../../services/konfigurace.service';

export interface DialogData {
  status: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `    
    <div class="VyskakovaciOkno">
      <div *ngIf="data.status=='OK'" class="vyskakovaciOknoImageOK"></div>
      <p *ngIf="data.status=='OK'">
      Náš bankéř Vás bude kontaktovat do 24 hodin.
    </p>
      <div *ngIf="data.status=='NOK'" class="vyskakovaciOknoImageNOK"></div>
    <p *ngIf="data.status=='NOK'">
      Něco se asi pokazilo, kontaktujte nás prosím na telefonním čísle {{this.kontakt}}
    </p>
    <button class="btn btn-success btn-lg" 
            [mat-dialog-close] 
            (click)="onClick()">
      OK
    </button> 
    </div>
  `,
})
export class DialogOverviewExampleDialog{

  public kontakt: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private konfigurace: KonfiguraceService) {

    this.kontakt = this.konfigurace.kontaktHelpdesk;
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
