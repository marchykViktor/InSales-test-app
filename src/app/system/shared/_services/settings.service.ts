import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  editLink(link: String) {
    return this.http.put<any>('/api/settings/editCsv', { link: link })
      .pipe(map((res: any) => {
        if (res) {
          return res;
        } else {
          return false;
        }
      }));
  };
}
