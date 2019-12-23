import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  breakpoint: number;
  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 2;
  }
}
