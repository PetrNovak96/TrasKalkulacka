import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KonfiguraceService } from '../../services/konfigurace.service';
import { OknoService } from '../../services/okno.service';

export interface DialogData {
  status: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div class="vyskakovaciOknoImage"></div>
    <div class="VyskakovaciOkno">
      <p *ngIf="data.status=='OK'">
      Náš bankéř Vás bude kontaktovat do 24 hodin.
    </p>
    <p *ngIf="data.status=='NOK'">
      Něco se asi pokazilo, kontaktujte nás prosím na telefonním čísle {{this.kontakt}}
    </p>
    <button class="btn btn-success btn-lg" 
            [mat-dialog-close] 
            (click)="onClick()">
      Ok
    </button> 
    </div>
  `,
})
export class DialogOverviewExampleDialog{

  public kontakt: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private konfigurace: KonfiguraceService,
    private oknoServisa: OknoService) {

    this.kontakt = this.konfigurace.kontaktHelpdesk;
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
