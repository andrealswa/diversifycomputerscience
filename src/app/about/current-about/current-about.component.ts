import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { StopAboutComponent } from "./stop-about.component";
import { AboutService } from "../about.service";

@Component({
  selector: "app-current-about",
  templateUrl: "./current-about.component.html",
  styleUrls: ["./current-about.component.css"]
})
export class CurrentAboutComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog, private aboutService: AboutService) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = (this.aboutService.getRunningEntries().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.aboutService.completeEntries();
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopAboutComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.aboutService.cancelEntries(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
