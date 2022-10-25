import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-checkbox-cell-renderer',
  templateUrl: './checkbox-cell-renderer.component.html',
  styleUrls: ['./checkbox-cell-renderer.component.scss']
})
export class CheckboxCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  // isSelected: any;

  agInit(params: any): void{
    this.params = params;
    // this.isSelected = this.params.data.img
  }

  refresh() {
    return false;
  }

}
