import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

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
    //this.entryDoc = db.doc<any>("entries/1");
    this.entries = this.entriesCollection.valueChanges();
  }

  ngOnInit() {}

  userEntryForm = this.fb.group({
    firstName: [""],
    lastName: [""]
  });

  submit() {
    let firstName = this.userEntryForm.get("firstName").value;
    let lastName = this.userEntryForm.get("lastName").value;
    console.log(firstName, lastName);
    //this.db.collection("entries").add(item);
    this.addEntry(firstName, lastName);
  }

  addEntry(firstName: string, lastName: string) {
    const id = this.db.createId();
    const entry: Entry = { id, firstName, lastName };
    this.entriesCollection.doc(id).set(entry);
  }
}
