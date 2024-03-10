import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "src/app/services/cart.service";
import { jwtDecode } from "jwt-decode";
import { Order } from "src/app/product";

@Component({
  selector: "app-all-orders",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./all-orders.component.html",
  styleUrls: ["./all-orders.component.scss"],
})
export class AllOrdersComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  userData: any;
  orders: Order[] = [];
  ngOnInit(): void {
    let encodeToken: any = localStorage.getItem("eToken");
    let decodeToken = jwtDecode(encodeToken);
    this.userData = decodeToken;
    this._CartService.getUserOrders(this.userData.id).subscribe({
      next: (response) => {
        this.orders = response;
      },
    });
  }
}
