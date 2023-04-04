import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../interface/productList';
import { Product } from '../models/products';
import { Cart } from '../models/cart';
import { ICategory } from '../interface/category';
import { ICart } from '../interface/cart';

const baseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  readonly api_url = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  getCartList(): Observable<ICart[]> {
    return this._http.get<ICart[]>(`${baseUrl}/carts`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  postProduct(data: Product) {
    return this._http.post(`${baseUrl}/cart`, data)
  }

  updateProduct(id: any, data: any) {
    return this._http.patch(`${baseUrl}/${id}`, data)
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }

  deleteProduct(id: string) {
    return this._http.delete(`${baseUrl}/${id}`)
  }

  getProductInfo(id:any){
    return this._http.get(`${this.api_url}/products/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

}
