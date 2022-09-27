import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {OrdersPageComponent} from "./pages/orders-page/orders-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'orders',
    component: OrdersPageComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
