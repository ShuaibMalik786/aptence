import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  search = new FormGroup({
    department: new FormControl(""),
    realtime: new FormControl(""),
    archive: new FormControl(""),
    tags: new FormControl(""),
    from: new FormControl(""),
    to: new FormControl(""),
    includeImage: new FormControl(""),
    includeDocument: new FormControl(""),
    includeVideo: new FormControl(""),
    publication: new FormControl(""),
    mediaType: new FormControl(""),
    sentiment: new FormControl(""),
    state: new FormControl(""),
    district: new FormControl(""),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  startSearch() {
    console.log(this.search.value);
  }
}
