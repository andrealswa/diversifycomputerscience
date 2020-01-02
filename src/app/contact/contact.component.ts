import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
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
                Contact Us
              </div>
            </h1>
            <div class="home-intro-desc">
              If you're having an problems, have any questions, or want to
              provide feedback, send us an email.<br />
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
                <mat-icon color="">email</mat-icon><span fxFlex="20px"></span>
                aislynlaurent@diversifycs.com
              </div>
              <!-- <div fxFlex="100">
                <mat-icon color="" style="outline">info</mat-icon
                ><span fxFlex="20px"></span>Frequently Asked Questions
              </div> -->
            </div>
          </div>
        </mat-card>
      </div>
    </section>
  `,
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
