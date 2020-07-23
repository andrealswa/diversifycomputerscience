import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "disclaimer",

  styleUrls: ["./disclaimer.component.scss"],
  template: `
    <div class="full-view">
      <mat-card class="container container-outline">
        <h3 class="disclaimer-title">
          Disclaimer
        </h3>
        <mat-card-content>
          Participants on this list are exclusively self-nominated. All entries
          are vetted by team members before being made available. Once vetted
          entries may be edited, updated or removed from the list by their
          owner.
        </mat-card-content>
        <mat-card-content>
          Though best efforts are made to ensure the accuracy and consistency of
          information on this list, Diversify CS makes no claims or guarantees
          about the list as a whole or any specific entry.
        </mat-card-content>
        <mat-card-content>
          Participants consent to having the information on this list publicly
          displayed and available. Diversify CS cannot guarantee that copies or
          reproductions will not be made at any given time, and takes no
          responsibility for the accuracy, representation or removal of these
          materials.
        </mat-card-content>
      </mat-card>
      <div class="center-image">
        <img
          class="disclaimer-image"
          src="../../../../../assets/images/undraw_public_discussion_btnw.svg"
          alt="online collaboration"
        />
      </div>
    </div>
  `,
})
export class DisclaimerComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
