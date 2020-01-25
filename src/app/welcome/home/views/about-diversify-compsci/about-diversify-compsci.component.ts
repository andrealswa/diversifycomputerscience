import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "about-diversify-compsci",
  styleUrls: ["./about-diversify-compsci.component.scss"],
  template: `
    <section>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="about-top-card-center">
            <mat-card-title class="about-title-font">
              About Diversify CompSci
            </mat-card-title>
            <mat-card-content class="about-subtitle-font">
              Our mission is to help highlight the community of computer
              scientists from under-represented groups both in industry and
              academia.
            </mat-card-content>
          </mat-card>
        </div>
        <mat-grid-list gutterSize="20" cols="3" rowHeight="300px">
          <mat-grid-tile [colspan]="1" [rowspan]="1"
            ><div>
              <mat-card class="inner-cards-about">
                <div class="icons-container">
                  <mat-icon class="icons">visibility</mat-icon>
                </div>
                <mat-card-title style="text-align: center"
                  >Increase Visibility</mat-card-title
                >
                <mat-card-content style="text-align: center">
                  Help to bridge the gap between the need for and the
                  availability of diverse perspectives in the field.
                </mat-card-content>
              </mat-card>
            </div></mat-grid-tile
          >
          <mat-grid-tile [colspan]="1" [rowspan]="1"
            ><div>
              <mat-card class="inner-cards-about">
                <div class="icons-container">
                  <mat-icon class="icons">group</mat-icon>
                </div>
                <mat-card-title style="text-align: center"
                  >Build Communities</mat-card-title
                >
                <mat-card-content style="text-align: center">
                  Offer more opportunities for professionals to connect with
                  each other and develop strong networks.
                </mat-card-content>
              </mat-card>
            </div></mat-grid-tile
          >
          <mat-grid-tile [colspan]="1" [rowspan]="1"
            ><div>
              <mat-card class="inner-cards-about">
                <div class="icons-container">
                  <mat-icon class="icons">brightness_5</mat-icon>
                </div>
                <mat-card-title style="text-align: center"
                  >Highlight Progress</mat-card-title
                >
                <mat-card-content style="text-align: center">
                  Showcase the increasing range of opportunities becoming
                  available in computer science.
                </mat-card-content>
              </mat-card>
            </div></mat-grid-tile
          >
        </mat-grid-list>
      </mat-card>
    </section>
  `
})
export class PortfolioComponent implements OnInit {
  @Input("backgroundGray") public backgroundGray;

  constructor() {}

  ngOnInit() {}
}
