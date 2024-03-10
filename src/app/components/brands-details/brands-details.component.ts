import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { EcodataService } from "src/app/services/ecodata.service";
import { Brand } from "src/app/product";

@Component({
  selector: "app-brands-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./brands-details.component.html",
  styleUrls: ["./brands-details.component.scss"],
})
export class BrandsDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _EcomdataService: EcodataService
  ) {}
  brandDetails: Brand = {} as Brand;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let brandID: any = params.get("id");
        this._EcomdataService.getBrandsDetails(brandID).subscribe({
          next: (response) => {
            // console.log(response.data);
            this.brandDetails = response.data;
          },
        });
      },
    });
  }
}
