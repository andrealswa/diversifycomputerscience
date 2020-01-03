import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <footer class="home-footer">
      <section class="home-footer-top">
        <div class="container">
          <div fxLayout="row" fxLayout.lt-md="column" fxLayoutWrap="nowrap">
            <div fxFlex="100" class="footer-box">
              <h4 class="footer-box-title"><b>Contact</b></h4>
              <mat-list>
                <mat-list-item>
                  <mat-icon mat-list-icon color="accent">email</mat-icon>
                  <h5 matLine><b>Email</b></h5>
                  <p matLine>email@abc.com</p>
                </mat-list-item>
                <mat-list-item>
                  <mat-icon mat-list-icon color="accent">location_on</mat-icon>
                  <h5 matLine><b>Address</b></h5>
                  <p matLine>Topoban, Akhalia</p>
                  <p matLine>Sylhet 3114, BD</p>
                </mat-list-item>
              </mat-list>

              <div class="socials pt-1">
                <ul>
                  <li><a href="" class="social-icon linkedin"></a></li>
                  <li><a href="" class="social-icon twitter"></a></li>
                  <li><a href="" class="social-icon facebook"></a></li>
                </ul>
              </div>
            </div>
            <div fxFlex="50" class="footer-box">
              <div class="socials pt-1">
                <ul>
                  <li><a href="" class="social-icon linkedin"></a></li>
                  <li><a href="" class="social-icon twitter"></a></li>
                  <li><a href="" class="social-icon facebook"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  `
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
