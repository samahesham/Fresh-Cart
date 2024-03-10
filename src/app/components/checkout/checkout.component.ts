import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-checkout",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _FormBuilder: FormBuilder,
    private _CartService: CartService
  ) {}
  cartId: any = "";
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        // console.log(param.get("id"));
        this.cartId = param.get("id");
      },
    });
  }
  checkout: FormGroup = this._FormBuilder.group({
    details: [""],
    phone: [""],
    city: [""],
  });
  handelForm(): void {
    // console.log(this.checkout.value);
    this._CartService.checkOut(this.cartId, this.checkout.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == "success") {
          window.open(response.session.url, "_self");
        }
      },
    });
  }
}
