import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  template: `
    <div>
      <!-- The app livings within hte ng-contnet of the navigation bar -->
      <!-- This is so the modal darkening works properly -->
      <app-header (sidenavToggle)="sidenav.toggle()">
        <main>
          <router-outlet></router-outlet>
        </main>
      </app-header>
      <div></div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
