import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EcodataService } from "src/app/services/ecodata.service";
import { Category } from "src/app/product";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  constructor(private _EcodataService: EcodataService) {}
  categories: Category[] = [];
  ngOnInit(): void {
    // Get All Categories
    this._EcodataService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
    });
  }
}
