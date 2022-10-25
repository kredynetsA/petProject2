import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {AdminRoutingModule} from "./admin-routing.modules";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";
import {AgGridModule} from "ag-grid-angular";
import { BtnCellRendererComponent } from './ui-components/btn-cell-renderer/btn-cell-renderer.component';
import {MatButtonModule} from "@angular/material/button";
import { ImgCellRendererComponent } from './ui-components/img-cell-renderer/img-cell-renderer.component';
import { RatingCellRendererComponent } from './ui-components/rating-cell-renderer/rating-cell-renderer.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CheckboxCellRendererComponent } from './ui-components/checkbox-cell-renderer/checkbox-cell-renderer.component';



@NgModule({
  declarations: [
    AdminComponent,
    ProductsPageComponent,
    OrdersPageComponent,
    BtnCellRendererComponent,
    ImgCellRendererComponent,
    RatingCellRendererComponent,
    CheckboxCellRendererComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    AgGridModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
