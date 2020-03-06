import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-welcome",

  styleUrls: ["./welcome.component.scss"],
  template: `
    <div class="background-image">
      <app-intro></app-intro>
    </div>

    <!-- For the blue-purple background -->
    <div class="background-image">
      <app-table id="table"> </app-table>
    </div>

    <div class="background-image">
      <about-diversify-compsci></about-diversify-compsci>
    </div>

    <div class="background-image">
      <team-bios></team-bios>
    </div>

    <!-- For the yellow-red background -->

    <!-- Don't need thing, can change it up a lot -->

    <app-footer></app-footer>
  `
})
export class WelcomeComponent implements OnInit {
  breakpoint: number;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userLoggedIn: Promise<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }
}
