import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  template: `
    <div>
      <app-header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </app-header>
      <div></div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
