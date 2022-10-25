import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-rating-cell-renderer',
  templateUrl: './rating-cell-renderer.component.html',
  styleUrls: ['./rating-cell-renderer.component.scss']
})
export class RatingCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  productRating: any;

  agInit(params: any): void{
    this.params = params;
    this.productRating = this.params.data.rating;
  }

  refresh() {
    return false;
  }

}
