import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NguCarouselModule } from "@ngu/carousel";
import { SharedModule } from "../../shared/shared.module";
import { HomeRoutes } from "./home.routing";

import { HomeOneComponent } from "./home-one.component";
import { HomeTwoComponent } from "./home-two.component";
import { HeaderComponent } from "./header/header.component";
import { IntroOneComponent } from "./intro-one/intro-one.component";
import { PortfolioComponent } from "./about-diversify-compsci/about-diversify-compsci.component";
import { ServicesComponent } from "./team-bios/team-bios.component";
import { CtaComponent } from "./questions/questions.component";
import { FooterComponent } from "./footer/footer.component";
import { TestimonialsCarouselComponent } from "./disclaimer/disclaimer.component";
import { AllSectionsComponent } from "./all-sections.component";

import { WINDOW_PROVIDERS } from "../../shared/helpers/window.helper";
import { SharedDirectivesModule } from "../../shared/directives/shared-directives.module";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeOneComponent,
    HomeTwoComponent,
    HeaderComponent,
    IntroOneComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    FooterComponent,
    TestimonialsCarouselComponent,
    AllSectionsComponent
  ],
  providers: [WINDOW_PROVIDERS],
  exports: [
    HomeOneComponent,
    HomeTwoComponent,
    HeaderComponent,
    IntroOneComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    FooterComponent,
    TestimonialsCarouselComponent,
    AllSectionsComponent
  ]
})
export class HomeModule {}
