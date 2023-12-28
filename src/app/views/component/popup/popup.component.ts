import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }
}
