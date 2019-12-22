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
}

@Component({
  selector: "app-user-entry-form",
  templateUrl: "./user-entry-form.component.html",
  styleUrls: ["./user-entry-form.component.css"]
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
    let firstName = this.userEntryForm.get("firstName").value;
    let lastName = this.userEntryForm.get("lastName").value;
    let email = this.userEntryForm.get("email").value;
    let affiliatedInstitution = this.userEntryForm.get("affiliatedInstitution")
      .value;
    let country = this.userEntryForm.get("country").value;
    let socialMedia = this.userEntryForm.get("socialMedia").value;
    let selfID = this.userEntryForm.get("selfID").value;
    let gender = this.userEntryForm.get("gender").value;
    let currentCareerStage = this.userEntryForm.get("currentCareerStage").value;
    let branch = this.userEntryForm.get("branch").value;
    let subfieldKeywords = this.userEntryForm.get("subfieldKeywords").value;
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
      subfieldKeywords
    };
    this.entriesCollection.doc(id).set(entry);
  }

  selfIDList: string[] = [
    "Asian",
    "Indigenous / Native",
    "Lesbian, Gay, Bisexual, Transgender, Queer",
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
