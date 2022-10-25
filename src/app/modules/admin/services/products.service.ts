import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(protected http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/api/product')
  }

  deleteProduct(productId: number) {
    return this.http.delete(`http://localhost:3000/api/product/${productId}`)
  }
}
