import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

import { Entries } from "../entries.model";
import { AboutService } from "../about.service";

@Component({
  selector: "app-past-about",
  templateUrl: "./past-about.component.html",
  styleUrls: ["./past-about.component.css"]
})
export class PastAboutComponent implements OnInit {
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

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.dataSource.data = this.aboutService.getCompletedOrCancelledAllEntries();
  }
}
