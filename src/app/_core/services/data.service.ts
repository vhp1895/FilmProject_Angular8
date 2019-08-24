import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { BookingInfo } from '../models/booking-info';

const httpOptions = [
  {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  },
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    })
  }
];

let Api = ``;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {
    Api = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(Api + "/" + uri).pipe(
      tap(
        () => {
          // define "load" pending api
          //define toast thông báo
        }),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err);
      })

    );
  }

  post(uri: string, data?: Object): Observable<any> {
    return this.http.post(Api + "/" + uri, data, httpOptions[0]).pipe(
      tap(
        () => { }),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err);
      })

    );
  }

  bookTix(uri: string, tixInfo: BookingInfo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('accessToken')
    });
    return this.http.post(Api + '/' + uri, tixInfo, { headers: headers, responseType: 'text' }).pipe(
      tap(
        () => { }),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err);
      })

    )
  }

  handleError(err) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(err.error);
  }
}
