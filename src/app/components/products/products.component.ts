import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Category, Product } from "src/app/product";
import { EcodataService } from "src/app/services/ecodata.service";
import { CartService } from "src/app/services/cart.service";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from "@angular/router";
import { SearchPipe } from "src/app/search.pipe";
import { FormsModule } from "@angular/forms";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { ToastrService } from "ngx-toastr";
import { TermTextPipe } from "src/app/term-text.pipe";
import { BuyPipe } from "src/app/buy.pipe";
import { WishlistService } from "src/app/services/wishlist.service";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    CommonModule,
    SearchPipe,
    TermTextPipe,
    BuyPipe,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CarouselModule,
  ],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  constructor(
    private _EcomdataService: EcodataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}
  searchTerm: string = "";
  products: Product[] = [];
  wishlistData: string[] = [];
  ngOnInit(): void {
    // Get All Products
    this._EcomdataService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
    // Wish List
    this._WishlistService.GetWishlist().subscribe({
      next: (response) => {
        const newData = response.data.map((item: any) => item._id);
        this.wishlistData = newData;
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
  AddProductToWishlist(productId: string): void {
    this._WishlistService.AddProductToWishlist(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;
      },
    });
  }
  RemoveProductToWishlist(productId: string): void {
    this._WishlistService.removeWishlistItem(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishlistData = response.data;
      },
    });
  }
}
