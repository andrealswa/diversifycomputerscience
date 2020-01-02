import { Component } from "@angular/core";

// From CLI generated navbar
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  // isFixed;
  // constructor(
  //   @Inject(DOCUMENT) private document: Document,
  //   @Inject(WINDOW) private window: Window
  // ) {}

  // ngOnInit() {}
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   const offset =
  //     this.window.pageYOffset ||
  //     this.document.documentElement.scrollTop ||
  //     this.document.body.scrollTop ||
  //     0;
  //   if (offset > 10) {
  //     this.isFixed = true;
  //   } else {
  //     this.isFixed = false;
  //   }
  // }

  // @HostBinding("class.menu-opened") menuOpened = false;

  // toggleMenu() {
  //   this.menuOpened = !this.menuOpened;
  // }

  // Angular Generated Navbar
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
