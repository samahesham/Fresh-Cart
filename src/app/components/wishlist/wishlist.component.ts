import { ChangeDetectorRef, Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WishlistService } from "src/app/services/wishlist.service";
import { CartService } from "src/app/services/cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-wishlist",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.scss"],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
  wishlist: any = null;
  ngOnInit(): void {
    this._WishlistService.GetWishlist().subscribe({
      next: (response) => {
        this.wishlist = response.data;
      },
    });
  }
  addCart(productId: string, btn: HTMLButtonElement): void {
    this._Renderer2.setAttribute(btn, "disabled", "true");
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(btn, "disabled");
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(btn, "disabled");
      },
    });
  }
  removeWishlistItem(productId: string): void {
    this._WishlistService.removeWishlistItem(productId).subscribe({
      next: (response) => {
        this._WishlistService.GetWishlist().subscribe({
          next: (response2) => {
            this.wishlist = response2.data;
          },
        });
        this._ToastrService.success(response.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
