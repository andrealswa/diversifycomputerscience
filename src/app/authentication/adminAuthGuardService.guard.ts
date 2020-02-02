import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { tap, mergeMap, map, take } from "rxjs/operators";
import { Observable, from, NEVER } from "rxjs";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseAuthService } from "./authAdmin.service";
@Injectable()
export class AdminAuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  canActivate() {
    return this.firebaseAuthService.getUser().pipe(
      map(user => {
        if (!user || !user.isAdmin) {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(["/"]);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
