import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";

import { AboutComponent } from "./about.component";
import { CurrentAboutComponent } from "./current-about/current-about.component";
import { NewAboutComponent } from "./new-about/new-about.component";
import { PastAboutComponent } from "./past-about/past-about.component";
import { StopAboutComponent } from "./current-about/stop-about.component";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { AboutRoutingModule } from "./about-routing.module";
import { aboutReducer } from "./about.reducer";

@NgModule({
  declarations: [
    AboutComponent,
    CurrentAboutComponent,
    NewAboutComponent,
    PastAboutComponent,
    StopAboutComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule,
    StoreModule.forFeature("about", aboutReducer)
  ],
  entryComponents: [StopAboutComponent]
})
export class AboutModule {}
