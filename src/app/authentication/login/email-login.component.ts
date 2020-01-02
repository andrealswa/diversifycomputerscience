import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-email-login",
  styleUrls: ["./email-login.component.scss"],
  template: `
    <div>
      <div *ngIf="isSignup">
        <h3>Create Account</h3>

        <button mat-stroked-button (click)="changeType('login')">
          Returning user?
        </button>
      </div>

      <div *ngIf="isLogin">
        <h3>Sign In</h3>
        <button size="small" mat-stroked-button (click)="changeType('signup')">
          New user?
        </button>
      </div>

      <div *ngIf="isPasswordReset">
        <h3>Reset Password</h3>
        <button size="small" mat-button (click)="changeType('login')">
          Back
        </button>
      </div>

      <!-- Email, Password, Confirm Password -->
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field [color]="email.valid && 'accent'">
          <input
            matInput
            formControlName="email"
            type="email"
            placeholder="Email"
            autocomplete="off"
          />

          <mat-error *ngIf="email.invalid && email.dirty">
            You must enter a valid email address
          </mat-error>
        </mat-form-field>

        <br />

        <mat-form-field
          [color]="email.valid && 'accent'"
          *ngIf="!isPasswordReset"
        >
          <input
            matInput
            formControlName="password"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />

          <mat-error *ngIf="password.invalid && password.dirty">
            Password must be at least 6 characters long
          </mat-error>
        </mat-form-field>

        <br />

        <mat-form-field
          [color]="passwordDoesMatch ? 'accent' : 'warn'"
          *ngIf="isSignup"
        >
          <input
            matInput
            formControlName="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            autocomplete="off"
          />

          <mat-error *ngIf="passwordConfirm.dirty && !passwordDoesMatch">
            Password does not match
          </mat-error>
        </mat-form-field>

        <mat-error class="server-error">{{ serverMessage }}</mat-error>

        <button
          *ngIf="isPasswordReset"
          mat-stroked-button
          type="submit"
          [disabled]="loading"
        >
          Send Reset Email
        </button>

        <button
          *ngIf="!isPasswordReset"
          mat-raised-button
          color="accent"
          type="submit"
          [disabled]="form.invalid || !passwordDoesMatch || loading"
        >
          Submit
        </button>
      </form>

      <button
        mat-button
        *ngIf="isLogin && !isPasswordReset"
        (click)="changeType('reset')"
      >
        Forgot password?
      </button>
    </div>
  `
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup;

  type: "login" | "signup" | "reset" = "signup";
  loading = false;

  serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(6), Validators.required]],
      passwordConfirm: ["", []]
    });
  }

  changeType(val) {
    this.type = val;
  }

  get isLogin() {
    return this.type === "login";
  }

  get isSignup() {
    return this.type === "signup";
  }

  get isPasswordReset() {
    return this.type === "reset";
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }

  get passwordConfirm() {
    return this.form.get("passwordConfirm");
  }

  get passwordDoesMatch() {
    if (this.type !== "signup") {
      return true;
    } else {
      return this.password.value === this.passwordConfirm.value;
    }
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      if (this.isLogin) {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      }
      if (this.isSignup) {
        await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      }
      if (this.isPasswordReset) {
        await this.afAuth.auth.sendPasswordResetEmail(email);
        this.serverMessage = "Check your email";
      }
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
