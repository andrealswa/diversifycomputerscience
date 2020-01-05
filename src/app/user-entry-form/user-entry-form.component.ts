import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";

// new stuff
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface Entry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  affiliatedInstitution: string;
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
  selector: "app-user-entry-form",
  templateUrl: "./user-entry-form.component.html",
  styleUrls: ["./user-entry-form.component.scss"]
})
export class UserEntryFormComponent implements OnInit {
  private entriesCollection: AngularFirestoreCollection<Entry>;
  entries: Observable<Entry[]>;

  constructor(private fb: FormBuilder, private db: AngularFirestore) {
    this.entriesCollection = db.collection<Entry>("entries");
    this.entries = this.entriesCollection.valueChanges();
  }

  ngOnInit() {}

  userEntryForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    affiliatedInstitution: ["", Validators.required],
    country: ["", Validators.required],
    socialMedia: [""],
    selfID: ["", Validators.required],
    gender: ["", Validators.required],
    currentCareerStage: ["", Validators.required],
    branch: ["", Validators.required],
    subfieldKeywords: ["", Validators.required]
  });

  submit() {
    let firstName: string = this.userEntryForm.get("firstName").value;
    let lastName: string = this.userEntryForm.get("lastName").value;
    let email: string = this.userEntryForm.get("email").value;
    let affiliatedInstitution: string = this.userEntryForm.get(
      "affiliatedInstitution"
    ).value;
    let country: string = this.userEntryForm.get("country").value;
    let socialMedia: string = this.userEntryForm.get("socialMedia").value;
    let selfID: string = this.userEntryForm.get("selfID").value;
    let gender: string = this.userEntryForm.get("gender").value;
    let currentCareerStage: string = this.userEntryForm.get(
      "currentCareerStage"
    ).value;
    let branch: string = this.userEntryForm.get("branch").value;
    let subfieldKeywords: string = this.userEntryForm.get("subfieldKeywords")
      .value;

    console.log(selfID);

    //this.db.collection("entries").add(item);
    this.addEntry(
      firstName,
      lastName,
      email,
      affiliatedInstitution,
      country,
      socialMedia,
      selfID,
      gender,
      currentCareerStage,
      branch,
      subfieldKeywords
    );
  }

  addEntry(
    firstName: string,
    lastName: string,
    email: string,
    affiliatedInstitution: string,
    country: string,
    socialMedia: string,
    selfID: string,
    gender: string,
    currentCareerStage: string,
    branch: string,
    subfieldKeywords: string
  ) {
    let approved: string = "false";
    const id = this.db.createId();
    const entry: Entry = {
      id,
      firstName,
      lastName,
      email,
      affiliatedInstitution,
      country,
      socialMedia,
      selfID,
      gender,
      currentCareerStage,
      branch,
      subfieldKeywords,
      approved
    };
    this.entriesCollection.doc(id).set(entry);
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
}
