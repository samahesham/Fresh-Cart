import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}
  myToken: any = { token: localStorage.getItem("eToken") };
  AddProductToWishlist(id: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId: id },
      { headers: this.myToken }
    );
  }
  GetWishlist(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { headers: this.myToken }
    );
  }
  removeWishlistItem(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      { headers: this.myToken }
    );
  }
}
