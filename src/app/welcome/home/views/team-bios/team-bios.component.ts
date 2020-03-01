import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "team-bios",
  styleUrls: ["./team-bios.component.scss"],
  template: `
    <section>
      <div><div id="girl-img"></div></div>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="inner-cards-team-title">
            <mat-card-header>
              <div mat-card-avatar class="example-header-team"></div>
              <mat-card-title>Team Bios</mat-card-title>
              <mat-card-subtitle>Summary</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              Our team consists entirely of undergraduate students from the
              University of Windsor, in partnership with the local chapter of
              the Developer Student Club powered by Google Developers.
            </mat-card-content>
          </mat-card>
        </div>

        <mat-grid-list
          cols="3"
          rowHeight="300px"
          gutterSize="5px"
          [cols]="breakpoint"
          (window:resize)="onResize($event)"
        >
          <mat-grid-tile [colspan]="1" [rowspan]="1">
            <mat-card class="inner-cards-team-bios">
              <mat-card-header>
                <div mat-card-avatar class="example-header-aislyn"></div>
                <mat-card-title>Aislyn</mat-card-title>
                <mat-card-subtitle></mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                Aislyn Laurent is a 4th year student completing her B.Sc. in
                Biochemistry & Computer Science. She’s passionate about science,
                technology, and the possibilities for application of new
                concepts in computer science in natural sciences.
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>

          <mat-grid-tile [colspan]="1" [rowspan]="1">
            <mat-card class="inner-cards-team-bios">
              <mat-card-header>
                <div mat-card-avatar class="example-header-andrea"></div>
                <mat-card-title>Andrea</mat-card-title>
                <mat-card-subtitle></mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                Andrea Swartz is in her final year completing her Bachelors of
                Computer Science degree. She is excited about software
                engineering and technology and the potential applications of
                software for the healthcare industry.
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>

          <mat-grid-tile [colspan]="1" [rowspan]="1">
            <mat-card class="inner-cards-team-bios">
              <mat-card-header>
                <div mat-card-avatar class="example-header-daniel"></div>
                <mat-card-title>Daniel</mat-card-title>
                <mat-card-subtitle></mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                Daniel Dupont is in his final year completing his Bachelors of
                Computer Science. He enjoys programming and learning new
                technologies for positive social change.
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
          <!--
          <mat-grid-tile>
            <mat-card class="inner-cards-team-bios">
              <mat-card-header>
                <div mat-card-avatar class="example-header-alina"></div>
                <mat-card-title>Alina</mat-card-title>
                <mat-card-subtitle></mat-card-subtitle>
              </mat-card-header>
              <mat-card-content> </mat-card-content>
            </mat-card>
          </mat-grid-tile>-->
        </mat-grid-list>
      </mat-card>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  @Input("backgroundGray") public backgroundGray;
  constructor() {}
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 1350 ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 1350 ? 1 : 3;
  }
}
