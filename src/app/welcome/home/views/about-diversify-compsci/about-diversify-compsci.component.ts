import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "about-diversify-compsci",
  styleUrls: ["./about-diversify-compsci.component.scss"],
  template: `
    <mat-card class="two-card-container">
      <!-- Card that holds two cards: About Diversify, Image -->
      <div class="about-text-image-card">
        <mat-card class="about-top-card-center">
          <mat-card-title class="about-title-font">
            About Diversify
          </mat-card-title>

          <mat-card-content class="about-subtitle-font">
            Our mission is to help highlight the community of computer
            scientists from under-represented groups both in industry and
            academia.
          </mat-card-content>
        </mat-card>

        <div>
          <img
            class="girl-image-right"
            src="../../../../../assets/images/undraw_shared_workspace_hwky.svg"
          />
        </div>
      </div>

      <!-- A card that holds 3 smaller cards: visibility, communities, progress -->
      <mat-grid-list
        gutterSize="20"
        [cols]="breakpoint"
        rowHeight="300px"
        (window:resize)="onResize($event)"
      >
        <mat-grid-tile [colspan]="1" [rowspan]="1"
          ><div>
            <mat-card class="inner-cards-about">
              <div class="icons-container">
                <mat-icon class="icons" aria-hidden="true">visibility</mat-icon>
              </div>
              <mat-card-title style="text-align: center"
                >Increase Visibility</mat-card-title
              >
              <mat-card-content style="text-align: center">
                Help to bridge the gap between the need for and the availability
                of diverse perspectives in the field.
              </mat-card-content>
            </mat-card>
          </div></mat-grid-tile
        >
        <mat-grid-tile [colspan]="1" [rowspan]="1"
          ><div>
            <mat-card class="inner-cards-about">
              <div class="icons-container">
                <mat-icon class="icons" aria-hidden="true">group</mat-icon>
              </div>
              <mat-card-title style="text-align: center"
                >Build Communities</mat-card-title
              >
              <mat-card-content style="text-align: center">
                Offer more opportunities for professionals to connect with each
                other and develop strong networks.
              </mat-card-content>
            </mat-card>
          </div></mat-grid-tile
        >
        <mat-grid-tile [colspan]="1" [rowspan]="1"
          ><div>
            <mat-card class="inner-cards-about">
              <div class="icons-container">
                <mat-icon class="icons" aria-hidden="true"
                  >brightness_5</mat-icon
                >
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
  `,
})
export class PortfolioComponent implements OnInit {
  @Input("backgroundGray") public backgroundGray;

  constructor() {}
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 550 ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 550 ? 1 : 3;
  }
}
