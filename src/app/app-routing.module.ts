import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserEntryFormComponent } from "./user-entry-form/user-entry-form.component";
import { TableComponent } from "./table/table.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContactComponent } from "./contact/contact.component";

// The highest level routes for our program.
const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: "entryform",
    component: UserEntryFormComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
