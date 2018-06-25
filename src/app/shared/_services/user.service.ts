import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  newUser(user: User) {
    return this.http.post<User>('api/user/register', { name: user.name, email: user.email, password: user.password })
      .pipe(map((res: any) => {
        if (res) {
          return true;
        } else {
          return false;
        }
      }));
  };

  getUser() {
    return this.http.get<User>('/api/user/current')
      .pipe(map((res: any) => {
        if (res) {
          return res;
        } else {
          return false;
        }
      }));
  };
}
