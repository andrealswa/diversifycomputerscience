import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  breakpoint: number;
  isLinear = false; // Linear stepper
  firstFormGroup: FormGroup; // Linear stepper
  secondFormGroup: FormGroup; // Linear stepper

  // The private _formBuilder: Formbuilder is for the linear stepper.
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;

    // Linear stepper code start
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    // Linear stepper code end
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }
}
