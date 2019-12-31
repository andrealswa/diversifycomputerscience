import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-home-one",
  template: `
    <div class="landing">
      <app-header></app-header>
      <app-intro></app-intro>
      <about-diversify-compsci></about-diversify-compsci>
      <team-bios></team-bios>
      <disclaimer></disclaimer>
      <questions></questions>
      <app-pricings></app-pricings>
      <app-contact [backgroundGray]="true"></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class HomeOneComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}
}
