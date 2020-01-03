import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-welcome",

  styleUrls: ["./welcome.component.scss"],
  template: `
    <div>
      <app-intro></app-intro>

      <!-- For the blue-purple background -->
      <div style="height: 100px; background-color: #212121;"></div>
      <div class="bg-blue-purple">
        <about-diversify-compsci></about-diversify-compsci>
        <team-bios></team-bios>
      </div>
      <div style="height: 100px; background-color: #212121;"></div>
      <!-- For the yellow-red background -->
      <div class="bg-yellow-red">
        <disclaimer></disclaimer>
        <questions></questions>
      </div>

      <!-- Don't need thing, can change it up a lot -->
      <app-footer></app-footer>
    </div>
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
