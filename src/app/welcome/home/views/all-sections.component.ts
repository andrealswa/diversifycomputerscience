import { Component, OnInit, OnDestroy } from "@angular/core";
import { scrollTo } from "../../shared/helpers/utils";

@Component({
  selector: "app-home-one",
  template: `
    <div class="landing">
      <app-header></app-header>
      <div style="height: 80px; width: 100%"></div>
      <about-diversify-compsci></about-diversify-compsci>
      <team-bios></team-bios>
      <disclaimer></disclaimer>
      <questions></questions>
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
