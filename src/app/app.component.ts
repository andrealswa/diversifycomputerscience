import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  template: `
    <div>
      <!-- The app livings within hte ng-contnet of the navigation bar -->
      <!-- This is so the modal darkening works properly -->
      <app-header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </app-header>
      <div></div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
