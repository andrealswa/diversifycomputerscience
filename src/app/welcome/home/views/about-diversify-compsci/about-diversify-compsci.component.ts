import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "about-diversify-compsci",
  styleUrls: ["./about-diversify-compsci.component.scss"],
  template: `
    <section>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="inner-cards-about about-top-card-center">
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

        <div>
          <mat-card class="inner-cards-about">
            <mat-card-title>Increase Visibility:</mat-card-title>
            <mat-card-content>
              Help to bridge the gap between the need for and the availability
              of diverse perspectives in the field.
            </mat-card-content>
          </mat-card>
        </div>
        <div>
          <mat-card class="inner-cards-about">
            <mat-card-title>Build Communities:</mat-card-title>
            <mat-card-content>
              Offer more opportunities for professionals to connect with each
              other and develop strong networks.
            </mat-card-content>
          </mat-card>
        </div>
        <div>
          <mat-card class="inner-cards-about">
            <mat-card-title>Highlight Progress:</mat-card-title>
            <mat-card-content>
              Showcase the increasing range of opportunities becoming available
              in computer science.
            </mat-card-content>
          </mat-card>
        </div>
      </mat-card>
    </section>
  `
})
export class PortfolioComponent implements OnInit {
  @Input("backgroundGray") public backgroundGray;

  constructor() {}

  ngOnInit() {}
}
