import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-home-two",
  template: `
    <div class="landing">
      <app-header></app-header>
      <questions></questions>
      <app-footer></app-footer>
    </div>
  `
})
export class HomeTwoComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}
}
