import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "../material.module";
import { GoogleSigninDirective } from "./google-signin.directive";
import { EmailLoginComponent } from "./login/email-login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SnackService } from "./snack.service";

@NgModule({
  declarations: [
    // components
    LoginComponent,
    // directives
    GoogleSigninDirective,
    EmailLoginComponent
  ],
  imports: [
    // modules
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [SnackService]
})
export class AuthenticationModule {}
