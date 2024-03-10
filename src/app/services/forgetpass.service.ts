import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ForgetpassService {
  constructor(private _HttpClient: HttpClient) {}
  forgetpassword(userEmail: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      userEmail
    );
  }
  resetCode(resetCode: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      { resetCode: resetCode }
    );
  }
  resetPassword(email: string, newPass: string): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      { email: email, newPassword: newPass }
    );
  }
}
