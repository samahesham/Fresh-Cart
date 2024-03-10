import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./auth.guard";

const routes: Routes = [
  // BlankLayoutComponent
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./layouts/blank-layout/blank-layout.component").then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadComponent: () =>
          import("./components/home/home.component").then(
            (m) => m.HomeComponent
          ),
        title: "Home",
      },
      {
        path: "cart",
        loadComponent: () =>
          import("./components/cart/cart.component").then(
            (m) => m.CartComponent
          ),
        title: "Cart",
      },
      {
        path: "products",
        loadComponent: () =>
          import("./components/products/products.component").then(
            (m) => m.ProductsComponent
          ),
        title: "Products",
      },
      {
        path: "categories",
        loadComponent: () =>
          import("./components/categories/categories.component").then(
            (m) => m.CategoriesComponent
          ),
        title: "Categories",
      },
      {
        path: "brands",
        loadComponent: () =>
          import("./components/brands/brands.component").then(
            (m) => m.BrandsComponent
          ),
        title: "Brands",
      },
      {
        path: "wishlist",
        loadComponent: () =>
          import("./components/wishlist/wishlist.component").then(
            (m) => m.WishlistComponent
          ),
        title: "Wish List",
      },
      {
        path: "product-details/:id",
        loadComponent: () =>
          import("./components/product-details/product-details.component").then(
            (m) => m.ProductDetailsComponent
          ),
        title: "Product Details",
      },
      {
        path: "category-details/:id",
        loadComponent: () =>
          import(
            "./components/category-details/category-details.component"
          ).then((m) => m.CategoryDetailsComponent),
        title: "Category Details",
      },
      {
        path: "brand-details/:id",
        loadComponent: () =>
          import("./components/brands-details/brands-details.component").then(
            (m) => m.BrandsDetailsComponent
          ),
        title: "Brands Details",
      },
      // { path: "allorders", component: AllordersComponent },
      // { path: "checkout/:id", component: CheckoutComponent },
      {
        path: "checkout/:id",
        loadComponent: () =>
          import("./components/checkout/checkout.component").then(
            (m) => m.CheckoutComponent
          ),
        title: "Check Out",
      },
      {
        path: "allorders",
        loadComponent: () =>
          import("./components/all-orders/all-orders.component").then(
            (m) => m.AllOrdersComponent
          ),
        title: "All Orders",
      },
    ],
  },
  // AuthLayoutComponent
  {
    path: "",
    loadComponent: () =>
      import("./layouts/auth-layout/auth-layout.component").then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        loadComponent: () =>
          import("./components/login/login.component").then(
            (m) => m.LoginComponent
          ),
        title: "Login",
      },
      {
        path: "register",
        loadComponent: () =>
          import("./components/register/register.component").then(
            (m) => m.RegisterComponent
          ),
        title: "Register",
      },
      {
        path: "forgetPassword",
        loadComponent: () =>
          import("./components/forget-password/forget-password.component").then(
            (m) => m.ForgetPasswordComponent
          ),
        title: "Forget Password",
      },
    ],
  },
  // NotFoundComponent
  {
    path: "**",
    loadComponent: () =>
      import("./components/not-found/not-found.component").then(
        (m) => m.NotFoundComponent
      ),
    title: "Not Found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
