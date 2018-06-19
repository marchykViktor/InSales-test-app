import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/api/user/login', { email: email, password: password })
      .pipe(map((res: any) => {
        console.log(res)
        if (res && res.token) {
          localStorage.setItem('currentUser', JSON.stringify({ email, token: res.token }));

          return true;
        } else {
          return false;
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}