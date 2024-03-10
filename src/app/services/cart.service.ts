import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  myToken: any = { token: localStorage.getItem("eToken") };
  cartNumber: BehaviorSubject<any> = new BehaviorSubject(0);
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      {
        headers: this.myToken,
      }
    );
  }
  getUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.myToken,
    });
  }
  removeItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { headers: this.myToken }
    );
  }
  updateCart(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count: count },
      { headers: this.myToken }
    );
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { headers: this.myToken }
    );
  }
  checkOut(cartId: string, userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://samahesham.github.io/Fresh-Cart`,
      {
        shippingAddress: userData,
      },
      { headers: this.myToken }
    );
  }
  getUserOrders(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
      { headers: this.myToken }
    );
  }
}
