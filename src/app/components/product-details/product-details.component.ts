import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { ActivatedRoute } from "@angular/router";
import { EcodataService } from "src/app/services/ecodata.service";
import { CartService } from "src/app/services/cart.service";
import { Product } from "src/app/product";

@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcodataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  productDetails: Product = {} as Product;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let productID: any = params.get("id");
        this._EcomdataService.getProductDetails(productID).subscribe({
          next: (response) => {
            // console.log(response.data);
            this.productDetails = response.data;
          },
        });
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
}
