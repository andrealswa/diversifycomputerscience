import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-entry",
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
                Edit Entry - Under Construction
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
  `,
  styleUrls: ["./edit-entry.component.scss"]
})
export class EditEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
