import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IUser } from '../interface/users';
import { User } from '../models/users';
const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  readonly api_url = 'http://localhost:3000'
  constructor(private _http: HttpClient) { }
 getUsers():Observable<IUser[]> {
    return this._http.get<IUser[]>(`${baseUrl}/users`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  postUser(data:User){
    return this._http.post(`${baseUrl}/regis`,data)
  }

  logUser(data:User){
    return this._http.post(`${baseUrl}/login`,data)
  }
  handleError(err: HttpErrorResponse){
    return throwError(()=>new Error(err.message))
  }
  getUserInfo(phone:any){
    return this._http.get(`${this.api_url}/users/${phone}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
