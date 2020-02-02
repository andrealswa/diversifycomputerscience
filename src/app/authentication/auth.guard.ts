import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { SnackService } from "./snack.service";

interface Entry {
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
  isAdmin: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService,
    public firestore: AngularFirestore
  ) {}
  entryDoc: AngularFirestoreDocument<Entry>;
  entry: Observable<Entry>;
  isAdmin: string = "false"; //"true" or "false"

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this.snack.authError();
    }

    // let user2: firebase.User = this.afAuth.auth.currentUser;
    let uid: any = user.uid;

    if (this.firestore.doc("entries/" + uid) != null) {
      this.entryDoc = this.firestore.doc("entries/" + uid);
      this.entry = this.entryDoc.valueChanges();
      //behaves asynchronously
      this.entry.subscribe(myEntry => {
        this.isAdmin = myEntry.isAdmin;
      });
    }

    return isLoggedIn;
  }
}
