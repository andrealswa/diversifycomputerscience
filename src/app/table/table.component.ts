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

  showCenterButton: boolean = false;
  toggleButton() {
    if (this.showCenterButton === false) {
      this.showCenterButton = true;
    } else {
      this.showCenterButton = false;
    }
  }

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  private entriesCollection: AngularFirestoreCollection<Entry>;
  entries: Observable<Entry[]>;

  constructor(private db: AngularFirestore) {
    this.entriesCollection = db.collection<Entry>("entries");
    this.entries = this.entriesCollection.valueChanges();
  }

  ngOnInit() {
    this.entries.subscribe((entries: Entry[]) => {
      this.dataSource.data = entries.filter(entry => {
        // show only those entires that have been approved.
        return entry.approved === "true";
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selfIDList: string[] = [
    "[A]  Asian",
    "[I]  Indigenous / Native",
    "[LGBTQ+]   Lesbian, Gay, Bisexual, Transgender, Queer, LGBTQ+",
    "[MR]   Multi-Racial",
    "[OR]   Other Race",
    "[D]    Person with a Disability",
    "[B]  Black",
    "[L/H]  Latina / Latino or Hispanic",
    "[MENA]   Middle Eastern / North African",
    "[NC]   Not a Citizen of an Anglophone Country",
    "[P]    Pacific Islander",
    "[O]    Other Non-White Self-Identification"
  ];

  selfIDList2: string[][] = [
    ["[A]", "Asian"],
    ["[I]", "Indigenous / Native"],
    ["[LGBTQ+]", "Lesbian, Gay, Bisexual, Transgender, Queer, LGBTQ+"],
    ["[MR]", "Multi-Racial"],
    ["[OR]", "Other Race"],
    ["[D]", "Person with a Disability"],
    ["[B]", "Black"],
    ["[L/H]", "Latina / Latino or Hispanic"],
    ["[MENA]", "Middle Eastern / North African"],
    ["[NC]", "Not a Citizen of an Anglophone Country"],
    ["[P]", "Pacific Islander"],
    ["[O]", "Other Non-White Self-Identification"]
  ];

  genderList: string[][] = [
    ["[F]", "Female"],
    ["[M]", "Male"],
    ["", ""],
    ["[NB]", "Non-binary"],
    ["[ND]", "Prefer Not To Disclose"],
    ["[SD]", "Self Describe"]
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
