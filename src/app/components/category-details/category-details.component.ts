import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { ActivatedRoute } from "@angular/router";
import { EcodataService } from "src/app/services/ecodata.service";
import { CartService } from "src/app/services/cart.service";
import { Category } from "src/app/product";

@Component({
  selector: "app-category-details",
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: "./category-details.component.html",
  styleUrls: ["./category-details.component.scss"],
})
export class CategoryDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcodataService
  ) {}
  categoryDetails: Category = {} as Category;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let categoryID: any = params.get("id");
        this._EcomdataService.getCategoryDetails(categoryID).subscribe({
          next: (response) => {
            // console.log(response.data);
            this.categoryDetails = response.data;
          },
        });
      },
    });
  }
}
