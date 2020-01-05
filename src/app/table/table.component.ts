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
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, AfterViewInit {
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
    "subfieldKeywords"
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
    console.log(
      this.entries.subscribe((entries: Entry[]) => {
        this.dataSource.data = entries.filter(entry => {
          // show only those entires that have been approved.
          return entry.approved === "true";
        });
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

  selfIDList: string[] = [
    "Asian",
    "Indigenous / Native",
    "Lesbian, Gay, Bisexual, Transgender, Queer, LGBTQ+",
    "Multi-Racial",
    "Other Race",
    "Person with a Disability",
    "Black",
    "Latina / Latino or Hispanic",
    "Middle Eastern / North African",
    "Not a Citizen of an Anglophone Country",
    "Pacific Islander",
    "Other Non-White Self-Identification"
  ];

  genderList: string[] = [
    "Female",
    "Male",
    "Non-binary",
    "Other",
    "Prefer Not To Disclose",
    "Self Describe"
  ];
  stageList: string[] = [
    "Masters Student",
    "PhD Student",
    "Postdocorate",
    "Industry",
    "Tenure-Track",
    "Tenured"
  ];
}
