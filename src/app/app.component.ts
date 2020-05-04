import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "aptence";
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openPopup() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "500px",
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
