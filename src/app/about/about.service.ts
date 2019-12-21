import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/map";

import { Entries } from "./entries.model";
import { UIService } from "../shared/ui.service";
import * as UI from "../shared/ui.actions";
import * as About from "./about.actions";
import * as fromAbout from "./about.reducer";

@Injectable()
export class AboutService {
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromAbout.State>
  ) {}

  fetchAvailableAllEntries() {
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(
      this.db
        .collection("availableAllEntries")
        .snapshotChanges()
        .map(docArray => {
          // throw(new Error());
          return docArray.map(doc => {
            return {
              name: doc.payload.doc.data()["name"],
              affiliatedInstitution: doc.payload.doc.data()[
                "affiliatedInstitution"
              ],
              email: doc.payload.doc.data()["email"],
              country: doc.payload.doc.data()["country"],
              socialMedia: doc.payload.doc.data()["socialMedia"],
              selfID: doc.payload.doc.data()["selfID"],
              gender: doc.payload.doc.data()["gender"],
              duration: doc.payload.doc.data()["duration"],
              calories: doc.payload.doc.data()["calories"],
              currentCareerStage: doc.payload.doc.data()["currentCareerStage"],
              branch: doc.payload.doc.data()["branch"],
              subfieldKeywords: doc.payload.doc.data()["subfieldKeywords"]
            };
          });
        })
        .subscribe(
          (allEntries: Entries[]) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new About.SetAvailableAbouts(allEntries));
          },
          error => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(
              "Fetching Entries failed, please try again later",
              null,
              3000
            );
          }
        )
    );
  }

  startEntries(selectedId: string) {
    this.store.dispatch(new About.StartAbout(selectedId));
  }

  completeEntries() {
    this.store
      .select(fromAbout.getActiveAbout)
      .pipe(take(1))
      .subscribe(en => {
        this.addDataToDatabase({
          ...en,
          date: new Date(),
          state: "completed"
        });
        this.store.dispatch(new About.StopAbout());
      });
  }

  cancelEntries(progress: number) {
    this.store
      .select(fromAbout.getActiveAbout)
      .pipe(take(1))
      .subscribe(en => {
        this.addDataToDatabase({
          ...en,
          duration: en.duration * (progress / 100),
          calories: en.calories * (progress / 100),
          date: new Date(),
          state: "completed"
        });
        this.store.dispatch(new About.StopAbout());
      });
  }

  fetchCompletedOrCancelledAllEntries() {
    this.fbSubs.push(
      this.db
        .collection("finishedAllEntries")
        .valueChanges()
        .subscribe((allEntries: Entries[]) => {
          this.store.dispatch(new About.SetFinishedAbouts(allEntries));
        })
    );
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(entries: Entries) {
    this.db.collection("finishedAllEntries").add(entries);
  }
}
