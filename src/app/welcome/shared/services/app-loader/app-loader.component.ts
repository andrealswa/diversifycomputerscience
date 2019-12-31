import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-app-loader",
  styleUrls: ["./app-loader.component.scss"],
  template: `
    <div class="text-center">
      <h6 class="m-0 pb-1">{{ title }}</h6>
      <div mat-dialog-content>
        <mat-spinner [style.margin]="'auto'"></mat-spinner>
      </div>
    </div>
  `
})
export class AppLoaderComponent implements OnInit {
  title;
  message;
  constructor(public dialogRef: MatDialogRef<AppLoaderComponent>) {}

  ngOnInit() {}
}
