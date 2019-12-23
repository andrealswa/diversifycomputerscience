import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  isAnnualSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
