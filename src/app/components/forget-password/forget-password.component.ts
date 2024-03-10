import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ForgetpassService } from "src/app/services/forgetpass.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-forget-password",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.scss"],
})
export class ForgetPasswordComponent {
  constructor(
    private _AuthService: AuthService,
    private _ForgetpassService: ForgetpassService,
    private _Router: Router
  ) {}
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = "";
  userMsg: string = "";
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  resetCodeForm: FormGroup = new FormGroup({
    code: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });
  forgetPassword(): void {
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;
    this._ForgetpassService.forgetpassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      },
    });
  }
  resetCode(): void {
    let userCode = this.resetCodeForm.value.code;
    console.log(userCode);

    this._ForgetpassService.resetCode(userCode).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
        console.log(err);
      },
    });
  }
  resetPassword(): void {
    let userEmail = this.resetPasswordForm.value.email;
    let userPassword = this.resetPasswordForm.value.password;
    console.log(userEmail, userPassword);
    this._ForgetpassService.resetPassword(userEmail, userPassword).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        // login
        localStorage.setItem("eToken", response.token);
        this._AuthService.saveUserData();
        this._Router.navigate(["/home"]);
      },
      error: (err) => {
        this.userMsg = err.error.message;
        console.log(err);
      },
    });
  }
}
