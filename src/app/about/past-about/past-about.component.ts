import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Store } from "@ngrx/store";

import { Entries } from "../entries.model";
import { AboutService } from "../about.service";
import * as fromAbout from "../about.reducer";

@Component({
  selector: "app-past-about",
  templateUrl: "./past-about.component.html",
  styleUrls: ["./past-about.component.css"]
})
export class PastAboutComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    "date",
    "name",
    "affiliatedInstitution",
    "email",
    "country",
    "calories",
    "duration",
    "state"
  ];
  dataSource = new MatTableDataSource<Entries>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private aboutService: AboutService,
    private store: Store<fromAbout.State>
  ) {}

  ngOnInit() {
    this.store
      .select(fromAbout.getFinishedAllEntries)
      .subscribe((allEntries: Entries[]) => {
        this.dataSource.data = allEntries;
      });
    this.aboutService.fetchCompletedOrCancelledAllEntries();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
