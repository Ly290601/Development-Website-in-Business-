import { Admin } from './../models/admin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IAdmin } from '../interface/admin';
const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private _http: HttpClient) { }
  getAdmin():Observable<IAdmin[]> {
     return this._http.get<IAdmin[]>(`${baseUrl}/admin`).pipe(
       retry(3),
       catchError(this.handleError)
     )
   }
   logAdmin(data:Admin){
     return this._http.post(`${baseUrl}/login-admin`,data)
   }
   handleError(err:HttpErrorResponse){
     return throwError(()=>new Error(err.message))
   }
}
