import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KonfiguraceService } from '../../services/konfigurace.service';

export interface DialogData {
  status: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
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
