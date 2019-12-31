import { Routes } from "@angular/router";

import { HomeOneComponent } from "./home-one.component";
import { HomeTwoComponent } from "./home-two.component";
import { AllSectionsComponent } from "./all-sections.component";

export const HomeRoutes: Routes = [
  { path: "one", component: HomeOneComponent },
  { path: "two", component: HomeTwoComponent },
  { path: "all", component: AllSectionsComponent }
];
