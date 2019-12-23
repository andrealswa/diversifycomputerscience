import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  constructor() { }

  ngOnInit() {
  }

}
