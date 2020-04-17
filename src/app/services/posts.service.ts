import { Injectable } from '@angular/core';

// Service
import { HttpClient } from '@angular/common/http';

// For defining the response that we expect
import { Post } from '../interfaces/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://127.0.0.1:3000/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getById(id): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  add(title: String, description: String, authorId: String, date: Date): Observable<Post> {
    return this.http.post<Post>(`${this.url}`, { title, description, author: authorId, date });
  }

  update(id: String, title: String, description: String, authorId: String, date: Date): Observable<Post> {
    return this.http.patch<Post>(`${this.url}/${id}`, { title, description, author: authorId, date });
  }

  delete(id: String): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${id}`);
  }
}
