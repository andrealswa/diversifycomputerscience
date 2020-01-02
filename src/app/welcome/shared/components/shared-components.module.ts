import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "../shared-material.module";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedDirectivesModule } from "../directives/shared-directives.module";

import { BottomSheetShareComponent } from "./bottom-sheet-share/bottom-sheet-share.component";

const components = [BottomSheetShareComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SharedDirectivesModule,
    SharedMaterialModule
  ],
  declarations: components,
  entryComponents: [BottomSheetShareComponent],
  exports: components
})
export class SharedComponentsModule {}
