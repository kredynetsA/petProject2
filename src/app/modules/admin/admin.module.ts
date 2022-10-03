import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.modules";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AdminComponent,
    ProductsPageComponent,
    OrdersPageComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
