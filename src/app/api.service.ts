import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'bfb7623756ce41ddbccc550463da998f';
  selection: string;

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  getNews() {
    return this.httpClient
      .get(`http://newsapi.org/v2/top-headlines?q=world&apiKey=${this.API_KEY}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getNewsByCategory(input: string) {
    return this.httpClient
      .get(`http://newsapi.org/v2/everything?q=${input}&apiKey=${this.API_KEY}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  
}
