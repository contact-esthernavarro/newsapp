import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'bfb7623756ce41ddbccc550463da998f';
  selection: string;

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&country=uk&apiKey=${this.API_KEY}`);
  }

  getNewsByCategory(input: string) {
    return this.httpClient.get(`http://newsapi.org/v2/everything?q=${input}&apiKey=${this.API_KEY}`);
  }

}