import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyEgret() {
    window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
  }

}
