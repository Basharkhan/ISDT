import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _getAllBookUrl = "http://localhost:8080/getAllBooks";
  private _saveBookUrl = "http://localhost:8080/save";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this._getAllBookUrl}`)
  }

  saveBook(book: Object): Observable<Object> {
    return this.http.post(`${this._saveBookUrl}`, book, {responseType: 'text'})    
  }
  
}