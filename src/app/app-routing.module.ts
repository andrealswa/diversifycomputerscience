import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { UserEntryFormComponent } from "./user-entry-form/user-entry-form.component";
import { TableComponent } from "./table/table.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./authentication/login/login.component";
import { AuthGuard } from "./authentication/auth.guard";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { DisclaimerComponent } from "./welcome/home/views/disclaimer/disclaimer.component";
import { AuthAdminGuard } from "./authentication/authAdmin.guard";
import { AdminAuthGuardService } from "./authentication/adminAuthGuardService.guard";

// The highest level routes for our program.
const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: "entryform",
    component: UserEntryFormComponent,
    canActivate: [AuthGuard]
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
    path: "login",
    component: LoginComponent
  },
  {
    path: "admindashboard",
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuardService]
  },
  {
    path: "disclaimer",
    component: DisclaimerComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
