import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-img-cell-renderer',
  templateUrl: './img-cell-renderer.component.html',
  styleUrls: ['./img-cell-renderer.component.scss']
})
export class ImgCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  imgUrl: any;

  agInit(params: any): void{
    this.params = params;
    this.imgUrl = this.params.data.img
  }

  refresh() {
    return false;
  }
}
