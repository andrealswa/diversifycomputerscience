import { Component, OnInit, OnDestroy } from '@angular/core';
import { scrollTo } from '../../../shared/helpers/utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {
    // scrollTo('app-root');
  }
  ngOnDestroy() {
  }

  moreTemplates() {
    window.open('https://ui-lib.com/downloads/egret-html5-free-landing-page/');
  }

}
