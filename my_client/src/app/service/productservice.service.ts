import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../interface/productList';
import { Product } from '../models/products';
import { ICategory } from '../interface/category';

const baseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  readonly api_url = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  url_cat = "http://localhost:3000/products/category/1";

  url_cat1 = "http://localhost:3000/products/category/2";

  url_cat2 = "http://localhost:3000/products/category/3";

  url_cat3 = "http://localhost:3000/products/category/4";

  url_cat4 = "http://localhost:3000/products/category/5";

  url_cat5 = "http://localhost:3000/products/bestseller";

  getProductList(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${baseUrl}/products`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  postProduct(data: Product) {
    return this._http.post(`${baseUrl}/product`, data)
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

  getCategoryList(): Observable<ICategory[]>{
    return this._http.get<ICategory[]>(`${baseUrl}/categories`)
    .pipe(
      retry (3),
      catchError(this.handleError)
    )
  }

  getCategoryFind(): Observable<ICategory[]>{
    return this._http.get<ICategory[]>(`${baseUrl}/findProducts`)
    .pipe(
      retry (3),
      catchError(this.handleError)
    )
  }

  getProductInfo(id:any){
    return this._http.get(`${this.api_url}/products/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getListProductByCategory(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat);
  }

  getListProductByCategory1(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat1);
  }

  getListProductByCategory2(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat2);
  }

  getListProductByCategory3(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat3);
  }

  getListProductByCategory4(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat4);
  }

  getListProductByCategory5(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.url_cat5);
  }
}
