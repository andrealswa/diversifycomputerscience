import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-welcome",

  styleUrls: ["./welcome.component.scss"],
  template: `
    <div>
      <app-intro></app-intro>
      <about-diversify-compsci></about-diversify-compsci>
      <team-bios></team-bios>
      <disclaimer></disclaimer>

      <!-- TODO: Questions -->
      <questions></questions>

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

  constructor(private _formBuilder: FormBuilder) {}

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
