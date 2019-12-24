import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store"; // Provides us a store

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { UIService } from "../shared/ui.service";
import * as fromRoot from "../app.reducer"; // Convention
import * as UI from "../shared/ui.actions";
import * as Auth from "./auth.actions";

/*
The only reducer we ever use is the root reducer.
However, we need the definitions of the actions in the individual 
subreducer regions.
*/

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private store: Store<fromRoot.State> // The store is a generic type. // This will be the store we are injecting into the auth service.
  ) {}

  // Stores appear as slices, which follow the definitions of interfaces.
  // Need to provide the interface we used in the reducer.ts,
  // As the model for our data.
  // Note the convention to use camel case on the reducer.

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        // this.router.navigate(["/"]);
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
        // this.router.navigate(["/"]);
      }
    });
  }

  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    // We use this.store.
    // Then we can use the .dispatch method to send actions.
    // Actions are always an object with a type property.
    // START_LOADING, STOP_LOADING are the two we can use.
    // These are the types of actions.
    // Recall the action.type property, we use:

    // this.store.dispatch({type: 'START_LOADING'})
    // Note the below is identical to dispatching a specific constant.
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({type: 'STOP_LOADING'})
        this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    // this.store.dispatch({type: 'START_LOADING'})
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({type: 'STOP_LOADING'})
        this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({type: 'STOP_LOADING'})
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
