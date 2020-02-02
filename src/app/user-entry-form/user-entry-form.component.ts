import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import Swal from "sweetalert2";
import PlaceResult = google.maps.places.PlaceResult;

// new stuff
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { element } from "protractor";

export interface Entry {
  uid: string;
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
  isAdmin: string;
}

@Component({
  selector: "app-user-entry-form",
  templateUrl: "./user-entry-form.component.html",
  styleUrls: ["./user-entry-form.component.scss"]
})
export class UserEntryFormComponent implements OnInit {
  private entriesCollection: AngularFirestoreCollection<Entry>;
  entries: Observable<Entry[]>;

  // If an entry is already present:
  entryPresent: boolean = false;

  // Place to hold data in case it is already present:
  firstNameData: string = "";
  lastNameData: string = "";
  emailData: string = "";
  affiliatedInstitutionData: string = "";
  countryData: string = "";
  socialMediaData: string = "";
  selfIDData: string = "";
  genderData: string = "";
  currentCareerStageData: string = "";
  branchData: string = "";
  subfieldKeywordsData: string = "";
  isAdminData: string = "false";

  constructor(
    private fb: FormBuilder,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.entriesCollection = db.collection<Entry>("entries");
    this.entries = this.entriesCollection.valueChanges();
  }

  userEntryForm = this.fb.group({
    firstName: [this.entryPresent ? "" : "", Validators.required],
    lastName: [this.firstNameData, Validators.required],
    email: [this.emailData, [Validators.email, Validators.required]],
    affiliatedInstitution: [
      this.affiliatedInstitutionData,
      Validators.required
    ],
    country: [this.countryData, Validators.required],
    socialMedia: [this.socialMediaData],
    selfID: [this.selfIDData, Validators.required],
    gender: [this.genderData, Validators.required],
    currentCareerStage: [this.currentCareerStageData, Validators.required],
    branch: [this.branchData, Validators.required],
    subfieldKeywords: [this.subfieldKeywordsData, Validators.required]
  });

  ngOnInit() {
    // Attempt to populate with initial data if user already entered a submission.
    let user: firebase.User = this.afAuth.auth.currentUser;
    let uid: string = user.uid;

    this.entriesCollection
      .doc(uid)
      .get()
      .subscribe(entry => {
        this.entryPresent = true;
        let data = entry.data();

        this.firstNameData = data.firstName;
        this.lastNameData = data.lastName;
        this.emailData = data.email;
        this.affiliatedInstitutionData = data.affiliatedInstitution;
        this.countryData = data.country;
        this.socialMediaData = data.socialMedia;
        this.selfIDData = data.selfID;
        this.genderData = data.gender;
        this.currentCareerStageData = data.currentCareerStage;
        this.branchData = data.branch;
        this.subfieldKeywordsData = data.subfieldKeywords;
        this.isAdminData = data.isAdmin;

        // Need patchValue to correct strange bug with validation not recognizing preloaded values
        this.userEntryForm.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          affiliatedInstitution: data.affiliatedInstitution,
          country: data.country,
          socialMedia: data.socialMedia,
          selfID: data.selfID,
          gender: data.gender,
          currentCareerStage: data.currentCareerStage,
          branch: data.branch,
          subfieldKeywords: data.subfieldKeywords
        });
      });
  }

  submit() {
    // This function is called in the html file.
    /*
      <form
        style="font-size: large;"
        [formGroup]="userEntryForm"
        (ngSubmit)="submit()"
      >
    */
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
    let isAdmin: string = this.isAdminData;

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
      subfieldKeywords,
      isAdmin
    );

    Swal.fire(
      "Entry Submission Successful!",
      "Our team of volunteers will review your entry",
      "success"
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
    subfieldKeywords: string,
    isAdmin: string
  ) {
    let approved: string = "false";

    let user: firebase.User = this.afAuth.auth.currentUser;
    let uid: string = user.uid;

    const entry: Entry = {
      uid,
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
      approved,
      isAdmin
    };

    // let map = new Map<string, string>();
    // map.set("Asian", "A");
    // map.set("Indigenous / Native", "I");
    // entry.selfID.replace("Asian", "A");
    // let myStringList: any = entry.selfID;
    // let myStringList2: string[] = myStringList;
    // let finalList: string[] = [];
    // myStringList2.forEach(element => {
    //   finalList.push(element.replace("Asian", "A"));
    //   element.replace("Indigenous / Native", "I");
    //   element.replace(
    //     "Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ+)",
    //     "LGBTQ+"
    //   );
    // });
    // let anyString: any = finalList;
    // entry.selfID = anyString;
    // entry.selfID = entry.selfID.replace("Asian", "A");

    // Need the id to be the user's id.
    // if (this.entriesCollection.doc(uid).get() ) {
    //   this.entriesCollection.doc(uid).update(entry);
    // } else {
    this.entriesCollection.doc(uid).set(entry);
    //}
  }

  // selfIDList: string[] = [
  //   "Asian",
  //   "Indigenous / Native",
  //   "Lesbian, Gay, Bisexual, Transgender, Queer (LGBTQ+)",
  //   "Multi-Racial",
  //   "Other Race",
  //   "Person with a Disability",
  //   "Black",
  //   "Latina / Latino or Hispanic",
  //   "Middle Eastern / North African",
  //   "Not a Citizen of an Anglophone Country",
  //   "Pacific Islander",
  //   "Other Non-White Self-Identification"
  // ];

  selfIDList2: string[][] = [
    ["A", "Asian"],
    ["I", "Indigenous / Native"],
    ["LGBTQ+", "Lesbian, Gay, Bisexual, Transgender, Queer, LGBTQ+"],
    ["MR", "Multi-Racial"],
    ["OR", "Other Race"],
    ["D", "Person with a Disability"],
    ["B", "Black"],
    ["L/H", "Latina / Latino or Hispanic"],
    ["MENA", "Middle Eastern / North African"],
    ["NC", "Not a Citizen of an Anglophone Country"],
    ["P", "Pacific Islander"],
    ["O", "Other Non-White Self-Identification"]
  ];

  genderList: string[] = [
    "Male",
    "Female",
    "Non-binary",
    "Other",
    "Self Describe",
    "Prefer Not To Disclose"
  ];

  branchList: string[] = [
    "Artificial Intelligence",
    "Cyber Security",
    "Application Development",
    "Graphics",
    "Games",
    "Systems Programming",
    "Data Science"
  ];
}
