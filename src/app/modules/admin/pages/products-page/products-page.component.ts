import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ColDef} from "ag-grid-community";
import * as moment from 'moment';
import {BtnCellRendererComponent} from "../../ui-components/btn-cell-renderer/btn-cell-renderer.component";
import {ImgCellRendererComponent} from "../../ui-components/img-cell-renderer/img-cell-renderer.component";
import {RatingCellRendererComponent} from "../../ui-components/rating-cell-renderer/rating-cell-renderer.component";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products: any;
  gridApi: any;
  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  columnDefs: ColDef[] = [
    {
      field: '№',
      width: 65,
      resizable: false,
      cellRenderer: (product:any) => {
        return product.rowIndex;
      }
    },
    {
      headerName: 'Image',
      field: 'img',
      cellRenderer: ImgCellRendererComponent,
      autoHeight: true,
      width: 150
    },
    {
      field: 'title',
      width: 150,
    },
    {
      headerName: 'Description',
      width: 150,
      field: 'desc',
    },
    {
      field: 'price',
      width: 120
    },
    {
      field: 'category',
      width: 120
    },
    {
      field: 'rating',
      cellRenderer: RatingCellRendererComponent
    },
    {
      headerName: 'Creation date',
      field: 'dateAdded',
      width: 230,
      cellRenderer: (res: any) => {
        return moment(res.data.dateAdded).format('DD/MM/YYYY HH:mm')
      }
      },
    {
      field: 'Action',
      resizable: false,
      cellRenderer: BtnCellRendererComponent,
      cellRendererParams: {
        update: (field: any) => {
          // TODO update button on ag-grid cell
          // console.log(field, '<<<field')
        },
        delete: (productId: any) => {
          this.productService.deleteProduct(productId).subscribe((res) => {
            if (res) {
              this.products = this.products.filter((product:any) => product._id != productId);
            }
          }, (err) => {
            console.log(err)
          })
        },
      },
    }
  ];


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  this.getProducts();
  }

  onFirstDataRendered(params: any) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    params.api.getDisplayedRowCount();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res
    }, (err) => {
      console.log(err)
    })
  }


}
