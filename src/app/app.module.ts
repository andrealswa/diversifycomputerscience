import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { CurrentAboutComponent } from "./about/current-about/current-about.component";
import { NewAboutComponent } from "./about/new-about/new-about.component";
import { PastAboutComponent } from "./about/past-about/past-about.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { StopAboutComponent } from "./about/current-about/stop-about.component";
import { AuthService } from "./auth/auth.service";
import { AboutService } from "./about/about.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    AboutComponent,
    CurrentAboutComponent,
    NewAboutComponent,
    PastAboutComponent,
    HeaderComponent,
    SidenavListComponent,
    StopAboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AboutService],
  bootstrap: [AppComponent],
  entryComponents: [StopAboutComponent]
})
export class AppModule {}
