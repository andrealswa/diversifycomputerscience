import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.scss"],
  template: `
    <section id="intro-section" class="home-intro-section">
      <div
        class="container"
        fxLayout="row"
        fxLayout.lt-md="column"
        fxLayoutWrap="nowrap"
        fxLayoutGap="30px"
        fxLayoutAlign="center center"
      >
        <mat-card>
          <div>
            <div style="text-align: center;">
              <!-- Not logged in -->
              <div *ngIf="!(afAuth.authState | async)">
                <h1>Login</h1>

                <button
                  mat-raised-button
                  appGoogleSignin
                  class="remove-orange-border"
                >
                  <img src="/assets/images/google-logo.svg" />Login with Google
                </button>
              </div>

              <!-- Logged in -->
              <div *ngIf="afAuth.authState | async as user" class="logout">
                <p>
                  Logged in as <strong>{{ user.email }}</strong>
                </p>

                <button mat-stroked-button (click)="afAuth.auth.signOut()">
                  Logout
                </button>
              </div>
            </div>

            <div style="height: 25px"></div>
            <mat-divider></mat-divider>
            <div style="height: 25px"></div>

            <!-- Email login -->
            <div style="text-align: center;">
              <div *ngIf="!(afAuth.authState | async)">
                <app-email-login></app-email-login>
              </div>
            </div>
          </div>
        </mat-card>
      </div>
    </section>
  `
})
export class LoginComponent {
  constructor(public afAuth: AngularFireAuth) {}
}

/*

<section id="intro-section" class="home-intro-section">
      <div
        class="container"
        fxLayout="row"
        fxLayout.lt-md="column"
        fxLayoutWrap="nowrap"
        fxLayoutGap="30px"
        fxLayoutAlign="center center"
      >
        <mat-card class="middle-container">
          <div fxFlex="">
            <h1 class="home-intro-title ">
              <div class="shadow-effect">
                Admin Dashboard - Under Construction
              </div>
            </h1>
            <div class="home-intro-desc">
              We are still developing this feature, it will get done as soon as
              possible!<br />
            </div>
            <div
              fxLayout="row"
              fxLayout.lt-sm="column"
              fxLayoutAlign="center center"
            ></div>
          </div>
        </mat-card>
      </div>
    </section>



*/
