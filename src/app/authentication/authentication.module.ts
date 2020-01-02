import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleSigninDirective } from "./google-signin.directive";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    // components
    LoginComponent,
    GoogleSigninDirective
  ],
  imports: [CommonModule]
})
export class AuthenticationModule {}
