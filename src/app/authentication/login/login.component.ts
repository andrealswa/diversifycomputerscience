import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.scss"],
  template: `
    <div>
      <button mat-raised-button appGoogleSignin></button>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {}
}
