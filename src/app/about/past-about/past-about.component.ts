import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";

import { Entries } from "../entries.model";
import { AboutService } from "../about.service";

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

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.dataSource.data = this.aboutService.getCompletedOrCancelledAllEntries();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
