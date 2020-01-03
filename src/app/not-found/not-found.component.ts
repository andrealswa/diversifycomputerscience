import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
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
        <mat-card class="middle-container">
          <div fxFlex="">
            <h1 class="home-intro-title ">
              <div class="shadow-effect">
                Page Not Found
              </div>
            </h1>
            <div class="home-intro-desc">
              What you are looking for doesn't exist!<br />
            </div>
            <div
              fxLayout="row"
              fxLayout.lt-sm="column"
              fxLayoutAlign="center center"
            >
              <a routerLink="/">
                <button
                  mat-raised-button
                  mat-lg-button
                  color=""
                  class="create-account-button remove-orange-border"
                >
                  <mat-icon>home</mat-icon> Take Me Home!
                </button>
              </a>
            </div>
          </div>
        </mat-card>
      </div>
    </section>
  `,
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
