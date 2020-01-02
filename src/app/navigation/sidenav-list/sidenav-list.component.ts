import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../app.reducer";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
  }
}
