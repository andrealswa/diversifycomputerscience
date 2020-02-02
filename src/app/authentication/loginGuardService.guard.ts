import { Injectable } from "@angular/core";
import { map, take } from "rxjs/operators";
import { CanActivate, Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginGuardService implements CanActivate {
  constructor(private router: Router, private auth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(
      map(authState => {
        if (authState && authState.email === "swartz8@uwindsor.ca") {
          this.router.navigate(["/admindashboard"]);
        } else {
          if (authState) {
            this.router.navigate(["/"]);
          }
        }
        return !authState;
      }),
      take(1)
    );
  }
}
