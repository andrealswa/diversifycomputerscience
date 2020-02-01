import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <footer class="home-footer">
      <section class="home-footer-top">
        <div class="footer-links">
          <a class="footer-link" routerLink="disclaimer">Disclaimer</a>|
          <a class="footer-link contact-link-margin" routerLink="contact"
            >Contact</a
          >
        </div>
        <div class="container">
          <img src="assets/images/Google-DSC-Logo.png" />
        </div>
      </section>
    </footer>
  `
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
