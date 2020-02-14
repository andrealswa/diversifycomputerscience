import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { SnackService } from "./snack.service";
import { take, map, tap } from "rxjs/operators";

interface Entry {
  id: string;
  firstName: string;
  lastName: string;
  affiliatedInstitution: string;
  email: string;
  country: string;
  socialMedia: string;
  selfID: string;
  gender: string;
  currentCareerStage: string;
  branch: string;
  subfieldKeywords: string;
  approved: string;
  isAdmin: string;
}

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private auth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user =>
        (user && user.email === "swartz8@uwindsor.ca") ||
        (user && user.email === "aislynlaurent@diversifycs.com")
          ? true
          : false
      ),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error("Access denied - Admins only");
        }
      })
    );
  }
}
