import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { AboutService } from "./about.service";
import * as fromAbout from "./about.reducer";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  ongoingAbout$: Observable<boolean>;

  constructor(
    private aboutService: AboutService,
    private store: Store<fromAbout.State>
  ) {}

  ngOnInit() {
    this.ongoingAbout$ = this.store.select(fromAbout.getIsAbout);
  }
}
