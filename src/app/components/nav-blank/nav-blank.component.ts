import { AuthService } from "src/app/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-nav-blank",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./nav-blank.component.html",
  styleUrls: ["./nav-blank.component.scss"],
})
export class NavBlankComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _CartService: CartService
  ) {}
  cartNumber: number = 0;
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartNumber = response.numOfCartItems;
      },
    });
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartNumber = data;
      },
    });
  }
  logOutUser(): void {
    this._AuthService.logOut();
  }
}
