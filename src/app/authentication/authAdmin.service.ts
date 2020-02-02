import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap, mergeMap } from "rxjs/operators";
import { Observable, from, NEVER } from "rxjs";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

Injectable();
export class FirebaseAuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  getUser(): Observable<any> {
    return this.angularFireAuth.authState.pipe(
      mergeMap(authState => {
        if (authState) {
          return from(
            this.angularFirestore.doc(`entries/${authState.uid}`).get()
          );
        } else {
          return NEVER;
        }
      })
    );
  }

  // is logged in?

  // signin

  // more auth related methods
}
