import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "../material.module";
import { GoogleSigninDirective } from "./google-signin.directive";

@NgModule({
  declarations: [
    // components
    LoginComponent,
    // directives
    GoogleSigninDirective
  ],
  imports: [
    // modules
    CommonModule,
    MaterialModule
  ]
})
export class AuthenticationModule {}
