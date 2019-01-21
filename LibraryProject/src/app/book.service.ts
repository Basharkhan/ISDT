import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _getAllBookUrl = "http://localhost:8080/getAllBooks";
  private _saveBookUrl = "http://localhost:8080/save";
  private _deleteBookUrl = "http://localhost:8080/delete";
  private _updateUrl = "http://localhost:8080/update";
  
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this._getAllBookUrl}`)
  }

  saveBook(book: Object): Observable<Object> {
    return this.http.post(`${this._saveBookUrl}`, book, {responseType: 'text'});    
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this._deleteBookUrl}/${id}`, {responseType: 'text'});
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this._updateUrl}`, {responseType: 'text'});
  }
  
}
