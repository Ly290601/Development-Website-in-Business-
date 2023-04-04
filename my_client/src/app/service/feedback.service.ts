import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Feedback } from '../models/feedback';
import { IFeedback } from './../interface/feedback';
const baseUrl ="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http: HttpClient) {
   }
   getFeedback():Observable<IFeedback[]> {
    return this._http.get<IFeedback[]>(`${baseUrl}/feedback`).pipe(
      retry(3),
     catchError(this.handleError)
    )
  }
  postFeedback(data:Feedback){
    return this._http.post(`${baseUrl}/Feedback`,data)
  }
   handleError(err:HttpErrorResponse){
   return throwError(()=>new Error(err.message))
 }
}
