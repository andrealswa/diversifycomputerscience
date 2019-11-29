import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { AboutService } from "./about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  ongoingAbout = false;
  entriesSubscription: Subscription;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.entriesSubscription = this.aboutService.entriesChanged.subscribe(
      entries => {
        if (entries) {
          this.ongoingAbout = true;
        } else {
          this.ongoingAbout = false;
        }
      }
    );
  }
}
