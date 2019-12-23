import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { AuthService } from "./auth/auth.service";
import { environment } from "../environments/environment";
import { UIService } from "./shared/ui.service";
import { AuthModule } from "./auth/auth.module";
import { reducers } from "./app.reducer";
import { UserEntryFormComponent } from "./user-entry-form/user-entry-form.component";
import { TableComponent } from "./table/table.component";
import { HomeModule } from "./welcome/home/views/home.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    UserEntryFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
