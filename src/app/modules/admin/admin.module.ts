import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.modules";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';



@NgModule({
  declarations: [
    AdminComponent,
    ProductsPageComponent,
    OrdersPageComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatSidenavModule,

  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
