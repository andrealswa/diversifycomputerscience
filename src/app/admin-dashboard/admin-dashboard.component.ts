import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface Entry {
  id: string;
  firstName: string;
  lastName: string;
  affiliatedInstitution: string;
  email: string;
  country: string;
  socialMedia: string;
  selfID: string;
  gender: string;
  currentCareerStage: string;
  branch: string;
  subfieldKeywords: string;
  approved: string;
}

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    "firstName",
    "lastName",
    "affiliatedInstitution",
    "email",
    "country",
    "socialMedia",
    "selfID",
    "gender",
    "currentCareerStage",
    "branch",
    "subfieldKeywords",
    "approved"
  ];
  dataSource = new MatTableDataSource<Entry>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  private entriesCollection: AngularFirestoreCollection<Entry>;
  entries: Observable<Entry[]>;

  constructor(private db: AngularFirestore) {
    this.entriesCollection = db.collection<Entry>("entries");
    this.entries = this.entriesCollection.valueChanges();
  }

  ngOnInit() {
    // display the data in the console.
    console.log(
      this.entries.subscribe((entries: Entry[]) => {
        this.dataSource.data = entries;
      })
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  approvedEntry(entry: any): void {
    console.log("Approve clicked");
    // if statement for some extra safety
    if (entry.approved === "false") {
      // set from false to true
      entry.approved = "true";
      // update only the approved property
      this.entriesCollection.doc(entry.uid).update(entry);
    }
  }

  hideEntry(entry: any): void {
    console.log("Remove clicked");
    // if statement for some extra safety
    if (entry.approved === "true") {
      entry.approved = "false";
      this.entriesCollection.doc(entry.uid).set(entry);
    }
  }

  alreadyApproved(element): string {
    return "false";
  }
}
