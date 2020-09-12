import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  News() {
    // const url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74da004083014362a442eb198a6d2fde";
    const url = "http://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=79f9abb8f8fc4d7dbd98edbe8cff333e";
    return this.http.get(url)
  }
}
