import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

// SERVICES
import { AuthGuard } from "./services/auth/auth.guard";
import { AppLoaderService } from "./services/app-loader/app-loader.service";

const classesToInclude = [];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, FlexLayoutModule],
  entryComponents: [],
  providers: [AuthGuard, AppLoaderService],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
