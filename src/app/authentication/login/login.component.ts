import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.scss"],
  template: `
    <div>
      <div *ngIf="!(afAuth.authState | async)">
        <h1>Login</h1>

        <button mat-raised-button appGoogleSignin>
          <img src="/assets/images/google-logo.svg" />Login with Google
        </button>
      </div>

      <div *ngIf="afAuth.authState | async as user" class="logout">
        <p>
          Logged in as <strong>{{ user.email }}</strong>
        </p>

        <button mat-stroked-button (click)="afAuth.auth.signOut()">
          Logout
        </button>
      </div>

      <!-- Email login -->
      <div *ngIf="!(afAuth.authState | async)">
        <app-email-login></app-email-login>
      </div>
    </div>
  `
})
export class LoginComponent {
  constructor(public afAuth: AngularFireAuth) {}
}

/*
I am pretty sure that a private keyword will be fine here
for injecting the service into the template
due to the use of an inline template.
*/
