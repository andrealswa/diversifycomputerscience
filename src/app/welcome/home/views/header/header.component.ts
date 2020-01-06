import { Component } from "@angular/core";

// From CLI generated navbar
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

// AngularFire
import { AngularFireAuth } from "@angular/fire/auth";
import { async } from "@angular/core/testing";
import { userInfo } from "os";
import { AngularFirestore } from "angularfire2/firestore";

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

  isAdmin: string = "false";

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
    setTimeout(() => this.afterngOnInit(), 1000);
  }

  afterngOnInit() {
    let user: firebase.User = this.afAuth.auth.currentUser;
    let uid: any = user.uid;
    console.log(uid);
    this.firestore.collection("entries").get(uid);
  }
}
