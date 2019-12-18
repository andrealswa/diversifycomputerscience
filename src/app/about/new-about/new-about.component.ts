import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

import { AboutService } from "../about.service";
import { Entries } from "../entries.model";

@Component({
  selector: "app-new-about",
  templateUrl: "./new-about.component.html",
  styleUrls: ["./new-about.component.css"]
})
export class NewAboutComponent implements OnInit {
  allEntries: Observable<any>;

  constructor(
    private aboutService: AboutService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.allEntries = this.db.collection("availableEntries").valueChanges();
  }

  onStartAbout(form: NgForm) {
    this.aboutService.startEntries(form.value.entries);
  }
}
