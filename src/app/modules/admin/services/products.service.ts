import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(protected http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/api/product')

  }
}
