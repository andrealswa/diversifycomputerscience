import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "team-bios",
  styleUrls: ["./team-bios.component.scss"],
  template: `
    <section>
      <mat-card class="container container-outline">
        <div>
          <mat-card class="inner-cards-team-bios">
            <mat-card-header>
              <div mat-card-avatar class="example-header-image"></div>
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

        <div>
          <mat-card class="inner-cards-team-bios">
            <mat-card-header>
              <div mat-card-avatar class="example-header-image"></div>
              <mat-card-title>Aislyn</mat-card-title>
              <mat-card-subtitle></mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              Aislyn Laurent is a 4th year student completing her B.Sc. in
              Biochemistry & Computer Science. She’s passionate about science,
              technology, and the possibilities for application of new concepts
              in computer science in natural sciences.
            </mat-card-content>
          </mat-card>
        </div>
      </mat-card>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  @Input("backgroundGray") public backgroundGray;
  constructor() {}

  ngOnInit() {}
}
