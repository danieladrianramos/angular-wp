import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// For defining the response that we expect
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://127.0.0.1:3000/users';

  constructor(private http: HttpClient) { }

  login(username, password): Observable<HttpResponse<User>> {
    const data = {
      username,
      password
    };

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });    

    return this.http.post<User>(`${this.url}/login`, data, {
        headers: httpHeaders,
        observe: 'response'
    });
  }

  register(username, password, email): Observable<HttpResponse<User>> {
    const data = {
      username,
      password,
      email
    };

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });    

    return this.http.post<User>(`${this.url}`, data, {
        headers: httpHeaders,
        observe: 'response'
    });
  }
}
