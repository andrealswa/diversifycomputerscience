import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <div class="background-image">
      <div class="two-card-container">
        <!-- Contact Us Card -->
        <mat-card class="contact-us-card">
          <h1>
            Contact Us
          </h1>
          <div>Please reach us by email.<br /></div>
          <div>
            <mat-icon color="">email</mat-icon><span fxFlex="20px"></span>
            aislynlaurent@diversifycs.com
          </div>
        </mat-card>

        <!-- Questions Card -->
        <mat-card class="questions-card">
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

            <div fxLayoutAlign="center center"></div>
          </mat-card>
        </mat-card>
      </div>

      <!-- Image below the two cards -->
      <div class="image-container">
        <img
          class="contact-image"
          src="../../../../../assets/images/contactInfo.svg"
        />
      </div>
    </div>
  `,
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
