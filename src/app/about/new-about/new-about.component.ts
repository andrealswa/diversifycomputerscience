import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AboutService } from "../about.service";
import { Entries } from "../entries.model";

@Component({
  selector: "app-new-about",
  templateUrl: "./new-about.component.html",
  styleUrls: ["./new-about.component.css"]
})
export class NewAboutComponent implements OnInit {
  allEntries: Entries[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.allEntries = this.aboutService.getAvailableEntries();
  }

  onStartAbout(form: NgForm) {
    this.aboutService.startEntries(form.value.entries);
  }
}
