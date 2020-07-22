import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section id="intro-section" class="background-image">
      <div class="parent-shell">
        <div
          class="container"
          fxLayout="row"
          fxLayout.lt-md="column"
          fxLayoutWrap="nowrap"
          fxLayoutGap="30px"
          fxLayoutAlign="center "
        >
          <div class="middle-container">
            <mat-card class="left-card">
              <div fxFlex="">
                <h1 class="home-intro-title ">
                  <div class="shadow-effect">
                    Contact Us
                  </div>
                </h1>
                <div class="home-intro-desc">
                  Please reach us by email.<br />
                </div>
                <div
                  fxLayout="row"
                  fxLayout.lt-sm="column"
                  fxLayoutAlign="center center"
                ></div>
                <div class="intro-list" fxLayout="column" fxLayoutGap="30px">
                  <!-- <div fxFlex="100">
                <mat-icon color="">question_answer</mat-icon
                ><span fxFlex="20px"></span>If you're having an problems, have
                any questions, or want to provide feedback, send us an email.
              </div> -->
                  <div fxFlex="100">
                    <mat-icon color="">email</mat-icon
                    ><span fxFlex="20px"></span>
                    aislynlaurent@diversifycs.com
                  </div>
                  <!-- <div fxFlex="100">
                <mat-icon color="" style="outline">info</mat-icon
                ><span fxFlex="20px"></span>Frequently Asked Questions
              </div> -->
                </div>
              </div>
            </mat-card>
            <mat-card class="right-card">
              <div>
                <mat-card class="inner-cards-team-bios">
                  <mat-card-header>
                    <mat-card-title>Questions</mat-card-title>
                  </mat-card-header>

                  <mat-card-content>
                    If you have any comments, concerns, suggestions or questions
                    about Diversify Computer Science, please contact us.
                  </mat-card-content>

                  <mat-card-content>
                    This resourced is maintained entirely by volunteers. While
                    best efforts will bemade to attend to your message in a
                    timely fashion, your patience is very much appreciated.
                  </mat-card-content>

                  <div fxLayoutAlign="center center"></div>
                </mat-card>
              </div>
            </mat-card>
          </div>
        </div>
        <div class="image-container">
          <img
            class="contact-image"
            src="../../../../../assets/images/contactus.svg"
          />
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
