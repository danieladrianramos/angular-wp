import { Injectable } from '@angular/core';

// Service
import { HttpClient } from '@angular/common/http';

// For defining the response that we expect
import { Author } from '../interfaces/Author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  url = 'http://127.0.0.1:3000/authors';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }

  getById(id: String): Observable<Author> {
    return this.http.get<Author>(`${this.url}/${id}`);
  }

  add(name: String, bio: String): Observable<Author> {
    return this.http.post<Author>(`${this.url}`, { name, bio });
  }

  update(id: String, name: String, bio: String): Observable<Author> {
    return this.http.patch<Author>(`${this.url}/${id}`, { name, bio });
  }

  delete(id: String): Observable<Author> {
    return this.http.delete<Author>(`${this.url}/${id}`);
  }
}
