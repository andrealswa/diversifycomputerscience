import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav role="navigation">
        <app-sidenav-list (closeSidenav)="sidenav.close()"></app-sidenav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-header (sidenavToggle)="sidenav.toggle()"></app-header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
