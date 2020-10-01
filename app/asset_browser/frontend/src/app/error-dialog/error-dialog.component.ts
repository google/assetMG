import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  error_message: string;
}

@Component({
  selector: 'error-dialog',
  templateUrl: 'error-dialog.component.html',
})
export class ErrorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}