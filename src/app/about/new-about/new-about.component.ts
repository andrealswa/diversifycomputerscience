import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { AboutService } from "../about.service";
import { Entries } from "../entries.model";
import { UIService } from "../../shared/ui.service";
import * as fromAbout from "../about.reducer";
import * as fromRoot from "../../app.reducer";

@Component({
  selector: "app-new-about",
  templateUrl: "./new-about.component.html",
  styleUrls: ["./new-about.component.css"]
})
export class NewAboutComponent implements OnInit {
  allEntries$: Observable<Entries[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private aboutService: AboutService,
    private uiService: UIService,
    private store: Store<fromAbout.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.allEntries$ = this.store.select(fromAbout.getAvailableAllEntries);
    this.fetchAllEntries();
  }

  fetchAllEntries() {
    this.aboutService.fetchAvailableAllEntries();
  }

  onStartAbout(form: NgForm) {
    this.aboutService.startEntries(form.value.entries);
  }
}
