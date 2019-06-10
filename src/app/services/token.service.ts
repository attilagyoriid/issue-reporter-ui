import { TokenData } from './token-data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http: HttpClient) {}

  getToken(username: string, password: string) {
    const URL_TOKEN = 'http://localhost:8080/oauth/token';

    const HTTP_PARAMS = new HttpParams()
      .append('grant_type', 'password')
      .append('username', username)
      .append('password', 'bob');

    const HTTP_HEADERS = new HttpHeaders().append(
      'Authorization',
      'Basic ' + btoa('client:secret')
    );

    return this.http.post<TokenData>(
      URL_TOKEN,
      { withCredentials: true },
      {
        headers: HTTP_HEADERS, params: HTTP_PARAMS
      }
    );
  }

  getUsernameByToken(token) {
    const ACCESS_TOKEN = 'access_token';
    return this.http.post(
      'http://localhost:8080/api/getUserName',
      { withCredentials: true },
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token[ACCESS_TOKEN]
        })
      }
    );
  }
}
