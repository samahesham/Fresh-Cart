import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormControlOptions,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {}
  errorMsg: string = "";
  isLoading: boolean = false;
  loginForm: FormGroup = this._FormBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required,Validators.pattern(/^\w{6,}$/),]),
  // });
  handleForm(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // console.log(response);
          if (response.message == "success") {
            // login
            localStorage.setItem("eToken", response.token);
            this._AuthService.saveUserData();
            this._Router.navigate(["/home"]);
            this.isLoading = false;
          }
        },
        error: (err) => {
          // console.log(err);
          this.errorMsg = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
