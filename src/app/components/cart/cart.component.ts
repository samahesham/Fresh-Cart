import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "src/app/services/cart.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}
  cartDetails: any = null;
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        console.log(this.cartDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeCartItem(productId: string): void {
    this._CartService.removeItem(productId).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  changeCount(
    productId: string,
    count: number,
    btnP: HTMLButtonElement,
    btnM: HTMLButtonElement
  ): void {
    if (count >= 1) {
      this._Renderer2.setAttribute(btnP, "disabled", "true");
      this._Renderer2.setAttribute(btnM, "disabled", "true");
      this._CartService.updateCart(productId, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data;
          this._Renderer2.removeAttribute(btnP, "disabled");
          this._Renderer2.removeAttribute(btnM, "disabled");
        },
        error: (err) => {
          console.log(err);
          this._Renderer2.removeAttribute(btnP, "disabled");
          this._Renderer2.removeAttribute(btnM, "disabled");
        },
      });
    }
  }
  clearCart(): void {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        if (response.message == "success") {
          this.cartDetails = null;
          this._CartService.cartNumber.next(0);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
