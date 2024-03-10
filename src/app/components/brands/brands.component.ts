import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EcodataService } from "src/app/services/ecodata.service";
import { Brand } from "src/app/product";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-brands",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./brands.component.html",
  styleUrls: ["./brands.component.scss"],
})
export class BrandsComponent implements OnInit {
  constructor(private _EcodataService: EcodataService) {}
  brands: Brand[] = [];
  ngOnInit(): void {
    // Get All Categories
    this._EcodataService.getBrands().subscribe({
      next: (response) => {
        this.brands = response.data;
      },
    });
  }
}
