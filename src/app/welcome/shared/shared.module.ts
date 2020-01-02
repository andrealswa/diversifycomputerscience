import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

// SERVICES

const classesToInclude = [];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, FlexLayoutModule],
  entryComponents: [],
  providers: [],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {}
