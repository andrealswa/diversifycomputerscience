import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-one',
  template: `<div class="landing">
  <app-header></app-header>
  <app-intro></app-intro>
  <app-portfolio></app-portfolio>
  <app-services [backgroundGray]="true"></app-services>
  <app-testimonials-carousel></app-testimonials-carousel>
  <app-cta></app-cta>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>
  </div>`
})
export class HomeOneComponent implements OnInit, OnDestroy {
  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  

}
