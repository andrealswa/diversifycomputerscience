import { Component, OnInit, OnDestroy } from "@angular/core";
import { scrollTo } from "../../shared/helpers/utils";

@Component({
  selector: "app-home-one",
  template: `
    <div class="landing">
      <app-header></app-header>
      <div style="height: 80px; width: 100%"></div>
      <about-diversify-compsci
        [backgroundGray]="true"
      ></about-diversify-compsci>
      <app-portfolio-carousel></app-portfolio-carousel>
      <team-bios></team-bios>
      <app-services-carousel></app-services-carousel>
      <app-testimonials [backgroundGray]="true"></app-testimonials>
      <app-testimonials-carousel></app-testimonials-carousel>
      <app-cta></app-cta>
      <app-pricings></app-pricings>
      <app-contact [backgroundGray]="true"></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class AllSectionsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    scrollTo("app-root");
  }
  ngOnDestroy() {}
}
