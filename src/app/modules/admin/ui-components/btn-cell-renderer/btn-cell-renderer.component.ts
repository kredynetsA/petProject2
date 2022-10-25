import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  update() {
    this.params.update(this.params.value);
  }

  delete() {
    this.params.delete(this.params.data._id)
  }

  refresh() {
    return false;
  }

}
