import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store"; // The store type in ngrx store.
// Note that Store is a generic type, you need to provide the interface
// of the type of state that you are dealing with, contained in the
// .reducer.ts file.

import { AuthService } from "../auth.service";
import { UIService } from "../../shared/ui.service";
import * as fromRoot from "../../app.reducer"; // For getting the interface.

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  // Changed from isLoading: boolean;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State> // Store<{ui: fromApp.State}>
  ) {}

  ngOnInit() {
    // This is just using isLoading: boolean; not an observable.
    // this.store.subscribe(data => console.log(data))

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    // Note that it is a stylistic convention, for all variables
    // controlled by NgRx you are supposed to end them with
    // a dollar sign.

    // this.isLoading$ = this.store.map(state => state.ui.isLoading);

    this.loginForm = new FormGroup({
      email: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
