import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  editLink(link: String) {
    return this.http.post<any>('http://localhost:3000/api/settings/csv', { link: link })
      .pipe(map((res: any) => {
        if (res) {
          return res;
        } else {
          return false;
        }
      }));
  };

  editFileSettings(file: any) {
    return this.http.post<any>('http://localhost:3000/api/settings/csv-settings', { file: file })
      .pipe(map((res: any) => {
        if (res) {
          return res;
        } else {
          return false;
        }
      }));
  }
}
