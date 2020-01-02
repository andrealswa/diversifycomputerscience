import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "angularfire2";
import {
  AngularFirestoreModule,
  AngularFirestore
} from "angularfire2/firestore";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "../environments/environment";
import { UIService } from "./shared/ui.service";
import { UserEntryFormComponent } from "./user-entry-form/user-entry-form.component";
import { TableComponent } from "./table/table.component";
import { HomeModule } from "./welcome/home/views/home.module";

// 404 not found
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthenticationModule } from "./authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserEntryFormComponent,
    TableComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HomeModule,
    AuthenticationModule
  ],
  providers: [UIService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
