import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
products:any;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res
      console.log(res, 'RESPONSE')
    }, (err) => {
      console.log(err)
    })
  }

}
