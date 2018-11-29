import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KonfiguraceService } from '../../services/konfigurace.service';

export interface DialogData {
  status: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h1 *ngIf="data.status=='OK'">
      Náš bankéř Vás bude kontaktovat do 24 hodin.
    </h1>
    <h1 *ngIf="data.status=='NOK'">
      Něco se asi pokazilo, kontaktujte nás prosím na telefonním čísle {{this.kontakt}}
    </h1>
    <button class="btn btn-success btn-lg" [mat-dialog-close] (click)="onNoClick()">
      Ok
    </button>
  `,
})
export class DialogOverviewExampleDialog{

  public kontakt: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private konfigurace: KonfiguraceService) {

    this.kontakt = this.konfigurace.kontaktHelpdesk;
  }

  ngOnInit() {

  }


  onNoClick(): void {
    this.dialogRef.close();
    location.reload();
  }

}
