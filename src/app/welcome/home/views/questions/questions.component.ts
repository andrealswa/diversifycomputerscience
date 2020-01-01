import { Component, OnInit } from "@angular/core";

@Component({
  selector: "questions",

  styleUrls: ["./questions.component.scss"],
  template: `
    <section>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="inner-cards-team-bios">
            <mat-card-header>
              <mat-card-title>Questions</mat-card-title>
            </mat-card-header>

            <mat-card-content>
              If you have any comments, concerns, suggestions or questions about
              Diversify Computer Science, please contact us.
            </mat-card-content>

            <mat-card-content>
              This resourced is maintained entirely by volunteers. While best
              efforts will bemade to attend to your message in a timely fashion,
              your patience is very much appreciated.
            </mat-card-content>

            <div fxLayoutAlign="center center">
              <button
                mat-raised-button
                mat-lg-button
                color=""
                class="contact-us-button"
              >
                <mat-icon>chat_bubble_outline</mat-icon> Contact Us
              </button>
            </div>
          </mat-card>
        </div>
      </mat-card>
    </section>
  `
})
export class CtaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  buyEgret() {
    window.open(
      "https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi"
    );
  }
}
