import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IFgpw } from '../interface/fgpw';
import { Fgpw } from '../models/fgpw';
const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class FgpwService {

  constructor(private _http: HttpClient) { }
  getPhone():Observable<IFgpw[]> {
     return this._http.get<IFgpw[]>(`${baseUrl}/fgpw`).pipe(
       retry(3),
      catchError(this.handleError)
     )
   }
   postPhone(data:Fgpw){
     return this._http.post(`${baseUrl}/Fgpw`,data)
   } 
    handleError(err:HttpErrorResponse){
    return throwError(()=>new Error(err.message))
  }
}
