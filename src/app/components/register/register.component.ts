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
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {}
  errorMsg: string = "";
  isLoading: boolean = false;
  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: ["", [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      phone: [
        "",
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: [this.confirmPassword] } as FormControlOptions
  );
  confirmPassword(group: FormGroup): void {
    const password = group.get("password");
    const rePassword = group.get("rePassword");
    if (rePassword?.value == "") {
      rePassword?.setErrors({ required: true });
    } else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ notMatch: true });
    }
  }
  handleForm(): void {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == "success") {
            // login
            this._Router.navigate(["/login"]);
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.log(err);
          this.errorMsg = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
