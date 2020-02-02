import { Component } from "@angular/core";

// From CLI generated navbar
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

// AngularFire
import { AngularFireAuth } from "@angular/fire/auth";
import { async } from "@angular/core/testing";
//import { userInfo } from "os";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";

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

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  // Angular Generated Navbar

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    //Wait 2 seconds to initialize firebase
    setTimeout(() => this.afterngOnInit(), 2000);
  }

  entryDoc: AngularFirestoreDocument<Entry>;
  entry: Observable<Entry>;
  isAdmin: string = "false"; //"true" or "false"

  afterngOnInit() {
    let user: firebase.User = this.afAuth.auth.currentUser;
    let uid: any = user.uid;

    if (this.firestore.doc("entries/" + uid) != null) {
      this.entryDoc = this.firestore.doc("entries/" + uid);
      this.entry = this.entryDoc.valueChanges();
      //behaves asynchronously
      this.entry.subscribe(myEntry => {
        this.isAdmin = myEntry.isAdmin;
      });
    }
  }
}
